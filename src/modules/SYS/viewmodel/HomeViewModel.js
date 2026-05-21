import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { guardarToken } from "../service/AuthService";

const useHomeViewModel = () => {
    
    console.log("HomeViewModel cargado");
    

    const [parametros] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const token = parametros.get("token");

        if(token){
            console.log("Token detectado: ",token);
            guardarToken(token);
            console.log("TOKEN GUARDADO");
            
            navigate("/", {replace: true})
            
        }
    }, [parametros, navigate]);
};

export default useHomeViewModel;