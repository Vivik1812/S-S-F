import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import heroImg from '../../../assets/hero-img.png';
import PublicacionService from '../../../services/PublicacionService';
import ComunaService from '../../../services/ComunaService';

export default function HomeView() {
    const navigate = useNavigate();
    const [publicaciones, setPublicaciones] = useState([]);
    const [comunas, setComunas] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [filtros, setFiltros] = useState({
        tipo: 'Todos',
        estado: 'Todos',
        comuna: 'Todos',
        color: 'Todos',
        raza: 'Todos',
        sexo: 'Todos',
        fecha: 'Todos',
    });

    useEffect(() => {
        const cargarDatos = async () => {
            try {
                const publicacionesData = await PublicacionService.getPublicaciones();
                setPublicaciones(publicacionesData);

                // Descomenta si se arregla la carga de comunas
                // const comunasData = await ComunaService.getComunas();
                // setComunas(comunasData);
            } catch (error) {
                console.error('Error al cargar datos:', error);
            }
        };

        cargarDatos();
    }, []);

    return (
        <div className="page-wrapper">
            <Navbar />
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">Encuentra a tu mascota perdida</h1>
                    <p className="hero-desc">
                        Publica y busca avisos de animales<br /> perdidos y encontrados cerca de ti.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn-perdido" onClick={() => navigate('/publicar?tipo=perdido')}>Publicar mascota perdida</button>
                        <button className="btn-encontrado" onClick={() => navigate('/publicar?tipo=encontrado')}>Publicar mascota encontrada</button>
                    </div>
                </div>

                {/*AQUI VA LA IMAGEN, FALTA FALTA FALTA*/}

                <section className="search-section">
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Buscar por comuna, raza o tipo de mascota"
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                            className="search-input"
                        />

                        <div className="filtros-group">
                            <label>Tipo</label>
                            <select
                                value={filtros.tipo}
                                onChange={(e) => setFiltros({...filtros, tipo: e.target.value})}
                            >
                                <option>Todos</option>
                                <option>Perro</option>
                                <option>Gato</option>
                                <option>Otro</option>
                            </select>
                        </div>
                        <div className="filtros-group">
                            <label>Estado</label>
                            <select
                                value={filtros.estado}
                                onChange={(e) => setFiltros(prev => ({...prev, estado: e.target.value}))}
                            >
                                <option>Todos</option>
                                <option>Perdido</option>
                                <option>Encontrado</option>
                            </select>
                        </div>

                        {/*AQUI IBAN LAS COMUNAS
                        <div className="filtro-group">
                            <label>Comuna</label>
                            <select
                                value={filtros.comuna}
                                onChange={e => setFiltros(prev => ({ ...prev, comuna: e.target.value }))}
                            >
                                <option value="Todas">Todas</option>

                                {comunas.map(comuna => (
                                    <option key={comuna.id} value={comuna.nombre}>
                                        {comuna.nombre}
                                    </option>
                                ))}
                            </select>
                        </div>*/}

                        <button className="btn-buscar" onClick={() => navigate('/buscar')}>
                            Buscar
                        </button>
                    </div>
                </section>

                <section className="avisos-section">
                    <div className="avisos-header">
                        <h2 className="avisos-title">Avisos más recientes</h2>
                        <a href="#" onClick={e => { e.preventDefault(); navigate('/buscar'); }}>
                            Ver todos
                        </a>
                    </div>
                    <div className="cards-grid">
                        {publicaciones.map(p => (
                            <div className="animal-card" key={p.id}>
                                <div className="card-img-wrap">
                                    <span className={`card-badge ${p.estado === 'Perdido' ? 'badge-perdido' : 'badge-encontrado'}`}>
                                        {p.estado}
                                    </span>
                                    <img
                                        src={p.imagenUrl || heroImg}
                                        alt={p.nombre}
                                        className="card-img"
                                    />
                                </div>
                                <div className="card-body">
                                    <h3 className="card-name">{p.nombre || 'Sin nombre'}</h3>
                                    <div className="card-info">
                                        <span>{p.tipoAnimal || p.tipo} • {p.raza}</span>
                                        <span>Color: {p.color}</span>
                                        <span>
                                            {p.estado === 'Perdido' ? 'Última vez visto' : 'Encontrado en'}: {p.comuna?.nombre || p.comuna}
                                        </span>
                                        <span>Fecha: {p.fecha}</span>
                                    </div>
                                    <div className="card-actions">
                                        <button
                                            className="btn-ver-detalles"
                                            onClick={() => navigate(`/detalle/${p.id}`)}
                                        >
                                            Ver detalles
                                        </button>
                                        <button className="btn-contactar">
                                            Contactar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </section>

            <button className="fab-publicar" onClick={() => navigate('/publicar')}>
                Publicar
            </button>

            <Footer />
        </div>
    );
}

