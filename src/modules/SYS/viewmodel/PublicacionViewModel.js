import { useState } from 'react';
import PublicacionService from '../service/PublicacionService';

export default function usePublicacionViewModel() {
    const [publicaciones, setPublicaciones] = useState([]);

    const filterPublicaciones = async (filtros) => {
        const data = await PublicacionService.getFiltroPublicaciones(filtros);
        setPublicaciones(data);
    };

    return {
        publicaciones,
        filterPublicaciones,
    };
}