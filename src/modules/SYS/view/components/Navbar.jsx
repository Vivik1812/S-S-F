import {usenavigate, useLocation} from 'react-router-dom';

export default function navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive= (path) => location.pathname === path;

    if (variant === 'login') {
        return (
            <nav className="navbar--login">
                <div className="navbar-brand" onClick={() => navigate('/')} style= {{cursor: 'pointer'}}>
                    <Brandlogo/>
                </div>
                <div classname="nav-actions">
                    <span classname="nav-no-cuenta">No tengo cuenta</span>
                    <button classname="nav-registro-btn" onClick={() => navigate('/registro')}>Registrarse</button>
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
        <a href="#" className="btn-login" onClick={(e) => { e.preventDefault(); navigate('/login'); }}>
          <svg >Aqui falta icono</svg>
          Mi cuenta
        </a>
        <button className="btn-publicar-nav" onClick={() => navigate('/publicar')}>
          <svg >Aqui falta icono</svg>
          Publicar aviso
        </button>
      </div>
    </nav>
    );

    function BrandLogo(){
        return (
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <svg>Aqui falta icono  </svg>
            <div>
                <div className="brand-name">Sanos y Salvos</div>
                <div className="brand-tagline">Unidos por ellos</div>
            </div>
            </div>
    );
    }
}