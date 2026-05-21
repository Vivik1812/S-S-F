import { useEffect, useState } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export const CENTRO_SANTIAGO = [-33.4489, -70.6693];
export  const ZOOM_INICIAL = 12;
export const ZOOM_USUARIO = 16;

function CentrarMapa({ posicion, zoom }) {
  const map = useMap();

  useEffect(() => {
    if (posicion) {
      map.setView(posicion, zoom);
    }
  }, [map, posicion, zoom]);
  return null;
}

export default function MapView({
  centro = CENTRO_SANTIAGO,
  zoom = ZOOM_INICIAL,
  marcadores = [],
}) {
  const [ubicacionUsuario, setUbicacionUsuario] = useState(null);
  const [cargandoUbicacion, setCargandoUbicacion] = useState(false);
  const [mensajeUbicacion, setMensajeUbicacion] = useState("");
  const [errorUbicacion, setErrorUbicacion] = useState("");
  const [direccionUsuario, setDireccionUsuario] = useState("");
  const [cargandoDireccion, setCargandoDireccion] = useState(false);

  const obtenerDireccion = async (latitud, longitud) => {
    setCargandoDireccion(true);
    setDireccionUsuario("");

    try{
      const respuesta = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitud}&lon=${longitud}&accept-language=es`
      );

      if(!respuesta.ok){
        throw new Error("No se pudo obtener la direccion");
      }

      const datos = await respuesta.json();

      setDireccionUsuario(
        datos.display_name || "No se encontro una direccion para estas coordenadas."
      );
    }catch(error){
      setDireccionUsuario("No se pudo obtener la direccion de estas coordenadas.")
    }finally{
      setCargandoDireccion(false);
    }
  }

  const pedirUbicacion = () => {
    setMensajeUbicacion("");
    setErrorUbicacion("");
    setDireccionUsuario("");

    if (!navigator.geolocation) {
      setErrorUbicacion(
        "Tu navegador no soporta geolocalizacion. No se puede obtener tu ubicacion actual.",
      );
      return;
    }

    setCargandoUbicacion(true);

    navigator.geolocation.getCurrentPosition(
      async (posicion) => {
        const latitud = posicion.coords.latitude;
        const longitud = posicion.coords.longitude;

        setUbicacionUsuario({
          posicion: [latitud, longitud],
          latitud,
          longitud,
          precision: Math.round(posicion.coords.accuracy),
        });

        setMensajeUbicacion("Ubicacion obtenida correctamente.");
        await obtenerDireccion(latitud, longitud);
        setCargandoUbicacion(false);
      },
      (error) => {
        let mensaje = "No se pudo obtener tu ubicacion";
        if (error.code === 1) {
          mensaje =
            "No permitiste el acceso a tu ubicacion. Activa el permiso de ubicacion en el navegador";
        }

        if (error.code === 2) {
          mensaje =
            "Tu ubicacion no esta disponible en este momento. Intenta nuevamente.";
        }

        if (error.code === 3) {
          mensaje =
            "La solicitud de ubicacion tardo demasiado. Intenta nuevamente.";
        }

        setErrorUbicacion(mensaje);
        setCargandoUbicacion(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      },
    );
  };

  return (
    <section className="container my-4 text-start">
      <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
        <div className="card-body">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-3">
            <div>
              <h2 className="h4 text-bg-light mb-1">Mapa base</h2>
              <p className="text-secondary mb-0">
                Mapa centrado inicialmente en Santiago de Chile
              </p>
            </div>
            <button
              type="button"
              className="btn btn-success"
              onClick={pedirUbicacion}
              disabled={cargandoUbicacion}
            >
              {cargandoUbicacion ? "Obteniendo ubicacion" : "Usar mi ubicacion"}
            </button>
          </div>

          {mensajeUbicacion && (
            <div className="alert alert-success py-2" role="alert">
              {mensajeUbicacion}
            </div>
          )}
          {errorUbicacion && (
            <div className="alert alert-warning py-2" role="alert">
              {errorUbicacion}
            </div>
          )}
          {ubicacionUsuario &&
            (
              <div className="small text-secondary mb-3">
                <strong>Direccion aproximada: </strong>
                {cargandoDireccion ? "Buscando direccion..." : direccionUsuario}
                <br/>
                <span className="text-muted">
                  Precision aproximada: {ubicacionUsuario.precision} metros
                </span>
              </div>
            )}

          <MapContainer
            center={centro}
            zoom={zoom}
            scrollWheelZoom={true}
            style={{
              height: "460px",
              width: "100%",
              borderRadius: "1rem",
            }}
          >
            <CentrarMapa
              posicion={ubicacionUsuario?.posicion}
              zoom={ZOOM_USUARIO}
            />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {marcadores.map((marcador) =>(
              <Marker key={marcador.id} position={marcador.posicion}>
                <Popup>
                  <strong>{marcador.titulo}</strong>
                  <br/>
                  {marcador.descripcion}
                </Popup>
              </Marker>
            ))}
            {ubicacionUsuario &&(
              <Marker position={ubicacionUsuario.posicion}>
                <Popup>
                  <strong>Mi ubicacion</strong>
                  <br/>
                  {cargandoDireccion ? "Buscando direccion..." : direccionUsuario}
                </Popup>
              </Marker>
            )}
          </MapContainer>
        </div>
      </div>
    </section>
  );
}