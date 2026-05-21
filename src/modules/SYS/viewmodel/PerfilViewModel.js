import { useEffect, useState } from "react";
import { obtenerUsuarioActual } from "../service/AuthService";

const usePerfilViewModel = () => {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    cargarPerfil();
  }, []);

  const cargarPerfil = async () => {
    try {
      const datos = await obtenerUsuarioActual();
      console.log("Usuario: ", datos);
      setUsuario(datos);

    } catch (error) {
      console.error(error);
      setError("No se pudo cargar el perfil");


    } finally {
      setCargando(false);
      
    }
  };

  return {
    usuario,
    cargando,
    error,
  };
};

export default usePerfilViewModel;
