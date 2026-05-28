import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';   
import Navbar from '../view/components/Navbar'
import Footer from '../view/components/Footer';
import useHomeViewModel from '../viewmodel/HomeViewModel';
import MapView from './components/MapView';

export default function HomeView(){
    const {marcadores, cargando, error} = useHomeViewModel();

    return(
        <div className='py-4'>
            <section className='container text-center mb-4'>
                <span className='badge rounded-pill text-bg-light border mb-3'>
                    Sanos & Salvos
                </span>

                <h1 className='text-bg-light mb-3'>
                    Encuentra mascotas perdidas cerca de ti.
                </h1>

                <p className='lead text-secondary mb-0'>
                    Explora el mapa base de la plataforma para ubicar reportes de mascotas 
                    perdidas y encontradas.
                </p>
            </section>

            {error && (
                <div className='alert alert-warning' role='alert'>
                    {error}
                </div>
            )}

            {cargando ? (
                <div className = "container text-center py-5">
                    <div className="spinner-border text-success" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                    <p className='mt-3'>Cargando Publicaciones</p>
                </div>
            ) : (
                <MapView marcadores={marcadores} />
            )}
        </div>
    );
}

