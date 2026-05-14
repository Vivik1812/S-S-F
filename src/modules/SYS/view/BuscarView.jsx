import {useEffect, useState} from 'react';
import PublicacionService from '../service/PublicationService';

export default function useBuscarViewmodel(){
    const [resultados, serREsultados] = useState([]);
    const [cargando, setCargando] = useState(false);

    const cargarPublicaciones =async () =>{
        try {
            setLoading(true);

            const dara = await PublicacionService.getPublicaciones();
            setResultados(data);
        }catch (error) {
            console.error( error);
        }finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        cargarPublicaciones();
    }, []);

    return {
        resultados,
        cargando,
        cargarPublicaciones
    };
}