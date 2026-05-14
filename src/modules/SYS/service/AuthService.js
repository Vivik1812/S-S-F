const API_URL = 'http://localhost:8080/api/auth/';

const AuthService = {
    login: async (email, password) => {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST' ,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })

        if (!response.ok) {
            throw new Error('Credenciales Incorrectas')
        }

        const data = await response.json()
        localStorage.setItem('token', data.token)
        localStorage.setItem('usuario', JSON.stringify(data.usuario))
        return data
    },

    logout: () => {
        localStorage.removeItem('token')
        localStorage.removeItem('usuario')
    },

    getToken: () => {
        return localStorage.getItem('token')
    },

    isAutenticado: () => {
        return localStorage.getItem('token') !== null
    }
}

export default AuthService