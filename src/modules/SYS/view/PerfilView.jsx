import { FaUserCircle } from "react-icons/fa";
import usePerfilViewModel from "../viewmodel/PerfilViewModel";

const PerfilView = () => {
  const { usuario, cargando, error } = usePerfilViewModel();

  if (cargando) {
    return (
      <div className="container py-5 text-center">
        <p>Cargando perfil...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5 text-center">
        <p className="text-danger">{error}</p>
      </div>
    );
  }

  if (!usuario) {
    return (
      <div className="container py-5 text-center">
        <p>No hay datos del usuario.</p>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="card shadow border-0 rounded-4">
        <div className="card-body text-center p-5">
          <FaUserCircle size={70} className="text-success mb-4"/>
          <h3 className="fw-bold mb-4">Mi perfil</h3>
          <p>
            <strong>Nombre:</strong> {usuario.nombre}
          </p>
          <p>
            <strong>Apellido:</strong> {usuario.apellido}
          </p>
          <p>
            <strong>Correo:</strong> {usuario.correo}
          </p>
          <p>
            <strong>Telefono:</strong> {usuario.telefnoo || "No registrado"}
          </p>
          <p>
            <strong>RUT:</strong> {usuario.rut || "No registrado"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerfilView;
