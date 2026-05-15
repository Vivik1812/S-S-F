import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';   
import Navbar from '../view/components/Navbar'
import Footer from '../view/components/Footer';
import useHomeViewModel from '../viewmodel/HomeViewModel';

export default function HomeView(){
    useHomeViewModel();

    // const navigate = useNavigate();
    // const [publicaciones, setPublicaciones] = useState([]);
    // const [comunas, setComunas] = useState([]);
    // const [busqueda, setBusqueda] = useState(' ');
    // const [filtros, setFiltros] = useState({
    //     tipo: 'Todos',
    //     estado: 'Todos',
    //     comuna: 'Todos',
    //     color: 'Todos',
    //     raza: 'Todos',
    //     sexo: 'Todos',
    //     fecha: 'Todos',
    // });

    // useEffect(() => {
    //     cargarDatos();
    // }, []);

    // const cargarDatos = async () => {
    //     try {
    //         const publicacionesData = await PublicacionService.getPublicaciones();
    //         const comunasData = await ComunaService.getComunas();
    //         setPublicaciones(publicacionesData);
    //         setComunas(comunasData);
    //     } catch (error) {
    //         console.error("Error al cargar datos:", error);
    //     }     
    // };

    // return (
    //     <div className="page-wrapper">
            
    //         <section className="hero-section">
    //             <div className="hero-content">
    //                 <h1 className="hero-title">Encuentra a tu mascota perdida</h1>
    //                 <p className="hero-desc">
    //                     Publica y busca avisos de animales<br /> perdidos y encontrados cerca de ti.
    //                 </p>
    //                 <div className="hero-buttons">
    //                     <button className="btn-perdido" onClick={() => navigate('/publicar?tipo=perdido')}>Publicar mascota perdida</button>
    //                     <button className="btn-encontrado" onClick={() => navigate('/publicar?tipo=encontrado')}>Publicar mascota encontrada</button>
    //                 </div>
    //             </div>

    //             {/*AQUI VA LA IMAGEN, FALTA FALTA FALTA*/}

    //             <section className="search-section">
    //                 <div className="search-box">
    //                     <input
    //                         type="text"
    //                         placeholder="Buscar por comuna, raza o tipo de mascota"
    //                         value={busqueda}
    //                         onChange={(e) => setBusqueda(e.target.value)}
    //                         className="search-input"
    //                     />

    //                     <div className="filtros-row">
    //                         <div className="filtro-group">
    //                             <label>Tipo:</label>
    //                             <select
    //                                 value={filtros.tipo}
    //                                 onChange={(e) => setFiltros({...filtros, tipo: e.target.value})}
    //                             >
    //                                 <option >Todos</option>
    //                                 <option >Perro</option>
    //                                 <option >Gato</option>
    //                                 <option >Otro</option>
    //                             </select>
    //                         </div>
                            
    //                     </div>
    //                 </div>
    //             </section>
    //         </section>
    //         <Footer />
    //     </div>
    // )
}

