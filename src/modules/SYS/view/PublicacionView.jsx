import { useState } from 'react';
import usePublicacionViewModel from '../viewmodel/PublicacionViewModel';

export default function PublicacionView() {
    const { publicaciones, filterPublicaciones } = usePublicacionViewModel();

    const [filtros, setFiltros] = useState({
        especie: "",
        color: "",
        raza: "",
        sexo: "",
        edad: ""
    });

    const handleSearch = () => {
        filterPublicaciones(filtros);
    };

    return (
        <div>
            <h1>Filtrar Mascotas</h1>

            <input placeholder="Especie" onChange={(e) => setFiltros({ ...filtros, especie: e.target.value })} />
            <input placeholder="Color" onChange={(e) => setFiltros({ ...filtros, color: e.target.value })} />
            <input placeholder="Raza" onChange={(e) => setFiltros({ ...filtros, raza: e.target.value })} />
            <input placeholder="Sexo" onChange={(e) => setFiltros({ ...filtros, sexo: e.target.value })} />
            <input placeholder="Edad" onChange={(e) => setFiltros({ ...filtros, edad: e.target.value })} />

            <button onClick={handleSearch}>Buscar</button>

            //resultados
            {publicaciones.map(p => (
                <div key={p.id}>
                    <h2>Especie: {p.especie}</h2>
                    <p>Color: {p.color}</p>
                    <p>Raza: {p.raza}</p>
                    <p>Sexo: {p.sexo}</p>
                    <p>Edad: {p.edad}</p> 
                </div>
            ))}
        </div>
    );
}
