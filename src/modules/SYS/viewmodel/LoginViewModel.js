import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../service/AuthService";

const useLoginViewModel = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [cargando, setCargando] = useState(false);
    const navigate = useNavigate()

    const iniciarSesion = async (e) => {
        e.preventDefault()
        setError("")
        setCargando(true)

        try {
            await AuthService.login(email, password)
            navigate("/publicaciones")
        } catch (err) {
            setError(err.message)
        } finally {
            setCargando(false)
        }
    }

    return {
        email,
        setEmail,
        password,
        setPassword,
        error,
        cargando,
        iniciarSesion
    }
}

export default useLoginViewModel