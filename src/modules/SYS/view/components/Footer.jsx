import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaPaw } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-light border-top mt-5 py-5">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="d-flex aling-items-center mb-3">
              <FaPaw size={35} className="text-success me-2" />
              <div>
                <h5 className="fw-bold text-success mb-0">Sanos & Salvos</h5>
                <small className="fw-bold text-success mb-0">
                  Unidos por ellos
                </small>
              </div>
            </div>
            <p className="text-muted mb-4">
              Plataforma colaborativa para ayudar a encontrar y reunir mascotas
              perdidas.
            </p>
            <div className="d-flex gap-3">
                <a href="#" className="text-succes"><FaFacebookF size={18}/></a>
                <a href="#" className="text-succes"><FaInstagram size={18}/></a>
                <a href="#" className="text-succes"><FaTwitter size={18}/></a>
                <a href="#" className="text-succes"><FaWhatsapp size={18}/></a>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <h6 className="fw-bold mb-3">
                Sobre el proyecto
            </h6>

            <ul className="list-unstyled">
                <li className="mb-3">
                    <a href="#" className="text-decoration-none text-dark">
                        ¿Quienes somos?
                    </a>
                </li>
                <li className="mb-3">
                    <a href="#" className="text-decoration-none text-dark">
                        ¿Como funciona?
                    </a>
                </li>
                <li className="mb-3">
                    <a href="#" className="text-decoration-none text-dark">
                        ¿Preguntas frecuentes?
                    </a>
                </li>
            </ul>
          </div>
          <div className="col-6 col-mb-4 col-lg-2">
            <h6 className="fw-bold mb-3">
                Ayuda
            </h6>

            <ul className="list-unstyled">
                <li className="mb-2">
                    <a href="#" className="text-decoration-none text-dark">Consejos</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="text-decoration-none text-dark">Que hacer</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="text-decoration-none text-dark">Como reportar</a>
                </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <h6 className="fw-bold mb-3">
                Contacto
            </h6>
            <ul className="list-unstyled">
                <li className="mb-2 text-muted">
                    Contacnos
                </li>
                <li className="mb-2 text-muted">
                    sanosysalvos@ayuda.cl
                </li>
                <li className="mb-2 text-muted">
                    +56 9 1234 5678
                </li>
            </ul>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <h6 className="fw-bold mb-3">
                Terminos
            </h6>
            <ul className="list-unstyled">
                <li className="mb-2">
                    <a href="#" className="text-decoration-none text-dark">
                        Terminos y condiciones
                    </a>
                </li>
                <li className="mb-2">
                    <a href="#" className="text-decoration-none text-dark">
                        Politica de privacidad
                    </a>
                </li>
            </ul>
          </div>
        </div>
        <hr className="my-4"/>
        <p className="text-center text-muted mb-0">
            &copy; 2026 Sanos y Salvos. Todos los derechos revervador.
        </p>
      </div>
    </footer>
  );
}
