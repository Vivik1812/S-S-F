import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const CENTRO_SANTIAGO = [-33.4489, -70.6693];
const ZOOM_INICIAL = 12;

export default function MapView({
  centro = CENTRO_SANTIAGO,
  zoom = ZOOM_INICIAL,
  marcadores = [],
}) {
  const marcadoresMapa =
    marcadores.length > 0
      ? marcadores
      : [
          {
            id: "santiago",
            posicion: CENTRO_SANTIAGO,
            titulo: "Santiago, Chile",
            descripcion: "Centro inicial del mapa base.",
          },
        ];

  return (
    <section className="container my-4 text-start">
      <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
        <div className="card-body">
          <h2 className="h4 fw-semibold mb-2">Mapa base</h2>
          <p className="text-secondary mb-3">
            Visualizacion inicial centrada en Santiago de Chile con
            OpenStreetMap.
          </p>

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
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {marcadoresMapa.map((marcador) => (
                <Marker key={marcador.id} position={marcador.posicion}>
                    <Popup>
                        <strong>{marcador.titulo}</strong>
                        <br/>
                        {marcador.descripcion}
                    </Popup>
                </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
};
