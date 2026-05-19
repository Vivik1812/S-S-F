import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { actualizarPerfil } from "../service/AuthService";

const useCompletarPerfilViewModel = () => {
    const [rut, setRut] = useState("");
    const [telefono, setTelefono] = useState("");
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(false);

    const navegar = useNavigate();

    const limpiarRut = (valor) => {
        return valor.trim().replace(/\./g, "").toUpperCase();
    };

    const completarPerfil = async (e) => {
        e.preventDefault();
        setError(null);

        if(!rut.trim() || !telefono.trim()){
            setError("Debes ingresar tu RUT y Telefono");
            return;
        }

        try{
            setCargando(true);

            await actualizarPerfil({
                rut: limpiarRut(rut),
                telefono: telefono.trim(),
            });
        }catch(error){
            console.error(error);
            setError(
                error.respones?.data?.mensaje ||
                    error.response?.data?.message ||
                        "No se pudo completar el perfil."
            );
        }finally{
            setCargando(false);
        }
    };
    return {
        rut, setRut, telefono, setTelefono, cargando, error, completarPerfil
    }
}

export default useCompletarPerfilViewModel;