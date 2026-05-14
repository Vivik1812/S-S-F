import useLoginViewModel from '../viewModel/LoginViewModel';

const LoginView = () => {
    const {email, setEmail, password, setPassword, error, cargando, iniciarSesion } = useLoginViewModel();

    return (
        <div className='login-container'>
            <div className='login-box'>
                <h1>Sanos y Salvos</h1>
                <h2>Iniciar Sesión</h2>

                <form onSubmit={iniciarSesion}>
                    <div className='form-group'>
                        <label>Email</label>
                        <input
                            type='email'
                            placeholder='Ingresa tu email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className='form-group'>
                        <label>Contraseña</label>
                        <input
                            type='password'
                            placeholder='Ingresa tu contraseña'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {error && <p className='error-message'>{error}</p>}

                    <button type='submit' disabled={cargando}>
                        {cargando ? 'Cargando...' : 'Ingresar'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginView;
