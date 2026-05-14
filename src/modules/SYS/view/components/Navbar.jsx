import { useNavigate, useLocation } from 'react-router-dom';
import NotificacionCampana from './NotificacionCampana';

export default function Navbar({ variant }) {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    if (variant === 'login') {
        return (
            <nav className="navbar--login">
                <div className="navbar-brand" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                    <BrandLogo />
                </div>
                <div className="nav-actions">
                    <span className="nav-no-cuenta">No tengo cuenta</span>
                    <button className="nav-registro-btn" onClick={() => navigate('/registro')}>Registrarse</button>
                </div>
            </nav>
        );
    }

    return (
        <nav className="navbar">
            <div className="navbar-brand" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                <BrandLogo />
            </div>
            <ul className="nav-links">
                <li><a href="#" className={isActive('/') ? 'active' : ''} onClick={(e) => { e.preventDefault(); navigate('/'); }}>Inicio</a></li>
                <li><a href="#" className={isActive('/perdidos') ? 'active' : ''} onClick={(e) => { e.preventDefault(); navigate('/buscar?estado=Perdido'); }}>Animales perdidos</a></li>
                <li><a href="#" className={isActive('/encontrados') ? 'active' : ''} onClick={(e) => { e.preventDefault(); navigate('/buscar?estado=Encontrado'); }}>Animales encontrados</a></li>
                <li><a href="#" className={isActive('/publicar') ? 'active' : ''} onClick={(e) => { e.preventDefault(); navigate('/publicar'); }}>Publicar aviso</a></li>
            </ul>
            <div className="nav-actions">
                <NotificacionCampana />
                <a href="#" className="btn-login" onClick={(e) => { e.preventDefault(); navigate('/login'); }}>
                    Mi cuenta
                </a>
                <button className="btn-publicar-nav" onClick={() => navigate('/publicar')}>
                    Publicar aviso
                </button>
            </div>
        </nav>
    );
}

function BrandLogo() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div>
                <div className="brand-name">Sanos y Salvos</div>
                <div className="brand-tagline">Unidos por ellos</div>
            </div>
        </div>
    );
}