import { Navigate } from "react-router-dom";
import { Autenticado } from "../../service/AuthService";

const ProteccionRuta = ({children}) => {
    const autenticado = Autenticado();

    if(!autenticado){
        return <Navigate to="/login" replace/>;
    }

    return children;
}

export default ProteccionRuta;