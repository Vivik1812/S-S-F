import { FaPaw } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiLock } from "react-icons/fi";
import useLoginViewModel from "../viewmodel/LoginViewModel";

const LoginView = () => {
  const { handleGoogleLogin } = useLoginViewModel();

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow border-0 rounded-4">
            <div className="card-body text-center p-5">
              <FaPaw size={45} className="text-success mb-4" />

              <h3 className="fw-bold">Bienvenid@</h3>

              <h1 className="text-success fw-bold mb-3">Sanos & Salvos</h1>

              <p className="text-muted mb-4">Acceso solo mediante Google</p>

              <button
                className="btn btn-light border shadow-sm px-4 py-3 fw-bold"
                onClick={handleGoogleLogin}
              >
                <FcGoogle size={24} className="me-2" />
                Continuar con Google
              </button>
              
              <div className="mt-4 text-muted">
                <FiLock className="me-2"/>
                Acceso seguro y privado
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
