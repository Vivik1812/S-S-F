import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import PublicacionService from '../service/PublicacionService';
import { CENTRO_SANTIAGO } from './components/MapView';

//Fix iconos 
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetina: marketIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
})

//Componente para capturar clicks en el mapa
function SeleccionarPunto({onPuntoseleccionado}){
    useMapEvents({
        click(e) {
            onPuntoseleccionado([e.latlng.lat, e.latlng.lng]);
        },
    });
    return null;
}

export default function CrearPublicacionView() {
    const navigate = useNavigate();

    const [tipoPublicacion, setTipoPublicacion] = useState('');
    const [tipoMascota, setTipoMascota] = useState('');
    const [fotos, setFotos] = useState([]);
    const [form, setForm] = useState({
        nombre: '',
        especie: '',
        color: '',
        raza: '',
        sexo: '',
        edad: '',
        descripcion: '',
        aceptaTerminos: false,
    });

    //ubicacion en mapa
    const [puntoMarcado, setPuntoMarcado] = useState(null);
    const [direccionObtenida, setDirecctionObtenida] = useState('');
    const [cargandoubicacion, setCargandoUbicacion] = useState(false);
    const [cargandoGPS, setCargandoGPS] = useState(false);
    const [errorUbicacion, setErrorUbicacion] = useState('');
    const mapRef = useREf(null);

    const updateForm = (key, value) => {   
        setForm(prev => ({ ...prev, [key]: value }));
    };

    const handleFoto = (e) => {
        const files = Array.from(e.target.files);
        const nuevasFotos = files.map(f => ({ file: f, url: URL.createObjectURL(f) }));
        setFoto(prev => [...prev, ...nuevaFoto].slice(0,5));
    };

    const eliminarFoto = (index) =>{
        setFotos(prev => prev.filter((_,i) => i !==index));
    };
    //obetener direccion
    const obtenerDireccion = async (lat, lng) =>{
        setcargandoDireccion(true);
        setDirecctionObtenida('');
        try {
            const res = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}&accept-language=es`
            );
            if (!res.ok) throw new Error();
            const data = await res.json();
            setDirecctionObtenida(data.display_name || 'Dirección no encontrada');
        } catch {
            setDirecctionObtenida('no se pudo obtener la dirección');
        } finally {
            setCargandoDiireccion(false);
        }
    };

    //Click en el mapa
    const handlePuntoSeleccionado = async (coords) => {
        setPuntoMarcado(coords);
        setErrorUbicacion('');
        await obtenerDireccion(coords[0], coords[1]);
    };

    //geolocalizacion del dispositivo
    const usarMiubicacion = () =>{
        setErrorUbicacion('');
        if(!NavigationDestination.gelocation) {
            setErrorUbicacion('Tu navegador no soporta geolocalizacion');
            return;
        }
        setCargandoGPS(true);
        navigator.geolocation.getCurrentPosition(
            async(pos) => {
                const coords = [pos.coords.latitude, pos.coords.longitude];
                setPuntoMarcado(coords);
                //Centrar mapa
                if (mapRef.current){
                    mapRef.current.setView(coords,16);
                }
                await obtenerDireccion(coords[0], coords[1]);
                setCargandoGPS(false);
            },
            (err) => {
                const mensajes ={
                    1: 'Permiso denegado. Activalo en configuración',
                    2: 'Ubicación no disponible en este momento',
                    3: 'Tiempo de espera excedido. Vuelva a intentar',
                };
                setErrorUbicacion(mensajes[err.code] || 'No se pudo obtener la ubicación');
                setCargandoGPS(false);
            },
            {enableHighAccuracy: true, timeout: 10000, maximunAge: 0}
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!tipoPublicacion){
            alert('Debes seleccionar el tipo de publicación (Perdido / Encontrado)');
            return;
        }
        if(!tipoMascota){
            alert('Debes seleccionar el tipo de mascota');
            return;
        }
        if(!puntoMarcado){
            alert('Debes marcar la ubicacion en el mapa antes de publicar');
            return;
        }

        try {
            const nuevaPublicacion = {
                tipoPublicacion,
                tipoMascota,
                nombre: form.nombre,
                especie: form.especie,
                color: form.color,
                raza: form.raza,
                sexo: form.sexo,
                edad: form.edad,
                descripcion: form.descripcion,
                ubicacion:{
                    latitud: puntoMarcado[0],
                    longitud: puntoMarcado[1],
                    direccion: direccionObtenida,
                },
            };

            await PublicacionService.createPublicacion(nuevaPublicacion);
            alert('Publicación creada con éxito');
            navigate('/');
        } catch (error) {
            console.error('Error al crear publicación:', error);
            alert('Ocurrio un error al crear la publicacion. Intentelo nuevamente');
        }
    };

    return (
        <div className="crear-publicacion">
            <h1>Crear Publicación</h1>
            <form onSubmit={handleSubmit} className="crear-publicacion-form">
                {/* Tipo de publicación */}
                <div className="form-group">
                    <label>Tipo de publicación</label>
                    <div className="tipo-row">
                        <button type="button" onClick={()=> setTipoPublicacion('Perdido')}
                        className={tipoPublicacion === 'perdido' ? 'btn-activo-perdido' : 'btn-inactivo'}>
                        Perdido</button>
                        <button type="button" onClick={()=> setTipoPublicacion('Encontrado')}
                        className={tipoPublicacion === 'encontrado' ? 'btn-activo-encontrado' : 'btn-inactivo'}>
                        Encontrado</button>
                    </div>
                </div>

                {/* Tipo de mascota */}
                <div className="form-group">
                    <label>Tipo de mascota</label>
                    <div className="tipo-row">
                        {['Perro', 'Gato', 'Otros'].map(tipo => (
                            <button key={tipo} type="button" onClick={() => setTipoMascota(tipo)}
                                className={tipoMascota === tipo.toLowerCase() ? 'btn-activo' : 'btn-inactivo'}>
                                {tipo}
                            </button>
                        ))}
                    </div>
                </div>

                {/*Raza */}
                <div className="form-group">
                    <label>Raza</label>
                    <input type="text" placeholder= "Raza  "value={form.raza} onChange={(e) => updateForm('raza', e.target.value)} />
                </div>

                {/* Ubicación con mapa */}
                <div className="form-group">
                    <label>Ubicación <span style={{ color: 'red' }}>*</span></label>
                    <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.5rem' }}>
                        Haz clic en el mapa para marcar el lugar, o usa tu ubicación actual.
                    </p>

                    <button type="button" onClick={usarMiUbicacion} disabled={cargandoGPS}
                        style={{ marginBottom: '0.75rem' }}
                        className={cargandoGPS ? 'btn-inactivo' : 'btn-activo'}>
                        {cargandoGPS ? 'Obteniendo ubicación...' : '📍 Usar mi ubicación'}
                    </button>

                    {errorUbicacion && (
                        <p style={{ color: '#c0392b', fontSize: '0.85rem' }}>{errorUbicacion}</p>
                    )}

                    <MapContainer
                        center={CENTRO_SANTIAGO}
                        zoom={12}
                        scrollWheelZoom={true}
                        style={{ height: '350px', width: '100%', borderRadius: '0.75rem', marginBottom: '0.5rem' }}
                        ref={mapRef}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <SeleccionarPunto onPuntoSeleccionado={handlePuntoSeleccionado} />
                        {puntoMarcado && (
                            <Marker position={puntoMarcado} />
                        )}
                    </MapContainer>

                    {puntoMarcado && (
                        <div style={{ fontSize: '0.85rem', color: '#555', marginBottom: '0.5rem' }}>
                            <strong>Ubicación seleccionada:</strong>{' '}
                            {cargandoDireccion ? 'Buscando dirección...' : direccionObtenida}
                            <br />
                            <span style={{ color: '#888' }}>
                                Coordenadas: {puntoMarcado[0].toFixed(5)}, {puntoMarcado[1].toFixed(5)}
                            </span>
                        </div>
                    )}
                </div>

                {/*Descripción */}
                <div className="form-group">
                    <label>Descripción</label>
                    <textarea rows={5} placeholder= "Descripción  "value={form.descripcion} onChange={(e) => updateForm('descripcion', e.target.value)} />
                </div>

                {/* Fotos */}
                <div className="form-group">
                    <label>Fotos (máx. 5)</label>
                    <input type="file" accept="image/*" multiple onChange={handleFoto} />
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                        {fotos.map((f, i) => (
                            <div key={i} style={{ position: 'relative' }}>
                                <img src={f.url} alt={`foto-${i}`}
                                    style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }} />
                                <button type="button" onClick={() => eliminarFoto(i)}
                                    style={{ position: 'absolute', top: 0, right: 0, background: 'rgba(0,0,0,0.5)',
                                        color: 'white', border: 'none', borderRadius: '50%', cursor: 'pointer',
                                        width: '20px', height: '20px', fontSize: '12px', lineHeight: '20px', padding: 0 }}>
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/*Terminos y condiciones*/}
                <div className="form-group">
                    <label>
                        <input type="checkbox"
                            checked={form.aceptaTerminos}
                            onChange={(e) => updateForm('aceptaTerminos', e.target.checked)}
                            required />{' '}
                        Acepto los términos y condiciones
                    </label>
                </div>

                {/* Botón de enviar */}
                <button type="submit" className="btn-submit">Publicar aviso</button>
            </form>
        </div>
    );
}