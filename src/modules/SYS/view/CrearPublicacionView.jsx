import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import ComunaService from '../../../services/ComunaService';

export default function CrearPublicacionView() {
    const navigate = useNavigate();
    const [comunas, setComunas] = useState([]);
    const [tipoPublicacion, setTipoPublicacion] = useState('');
    const [tipoMascota, setTipoMascota] = useState('');
    const [form, setForm] = useState({
        nombre: '',
        especie: '',
        color: '',
        raza: '',
        sexo: '',
        edad: '',
        descripcion: '',
        comunaId: '',
        ubicacion: '',
        fecha: '',
    });

    const [foto, setFoto] = useState(null);

    useEffect(() => {
        const cargarcomunas = async () => {
            try {
                const data = await ComunaService.getComunas();
                setComunas(data);
            } catch (error) {
                console.error('Error al cargar comunas:', error);
            }
        };
        cargarcomunas();
    }, []);

    const updateForm = (key, value) => {   
        setForm(prev => ({ ...prev, [key]: value }));
    };

    const handleFoto = (e) => {
        const file = Array.from(e.target.files);
        const nuevaFoto = file.map(f => ({ file: f, url: URL.createObjectURL(f) 
        }));

        setFoto(prev => [...prev, ...nuevaFoto].slice(0,5));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
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
                comunaId: form.comunaId,
                ubicacion: form.ubicacion,
                fecha: form.fecha,
            };
            console.log(nuevaPublicacion);
            alert('Publicación creada con éxito');
            navigate('/');
        } catch (error) {
            console.error('Error al crear publicación:');

        };
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

                {/* Comuna */}
                <div className="form-group">
                    <label>Comuna</label>
                    <select className= "form-select" value={form.comunaId} onChange={(e) => updateForm('comunaId', e.target.value)}>
                        <option value="">Selecciona una comuna</option>
                        {comunas.map(comuna => (
                            <option key={comuna.id} value={comuna.id}>{comuna.nombre}</option>
                        ))}
                    </select>
                </div>

                {/* Ubicación */}
                <div className="form-group">
                    <label>Ubicación</label>
                    <input type="text" placeholder= "Ubicación  "value={form.ubicacion} onChange={(e) => updateForm('ubicacion', e.target.value)} />
                </div>

                {/*Descripción */}
                <div className="form-group">
                    <label>Descripción</label>
                    <textarea rows={5} placeholder= "Descripción  "value={form.descripcion} onChange={(e) => updateForm('descripcion', e.target.value)} />
                </div>

                {/* Fotos */
                /*AQUI FALTA INTEGRAR LAS IMAGENES*/}
                
                {/*AQUI SE AGREGAN TERMINOS*/}
                {/*Terminos y condiciones*/}
                <div className="form-group">
                    <label><input type="checkbox" checked={form.aceptaTerminos} onChange={(e) => updateForm('aceptaTerminos', e.target.checked)} required /> Acepto los términos y condiciones</label>
                </div>

                {/* Botón de enviar */}
                <button type="submit" className="btn-submit">Publicar aviso</button>
            </form>
        </div>
    );
}