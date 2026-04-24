import Ubicacion from "./Ubicacion";
import Mascota from "./Mascota";


export default class Publicacion {
    constructor({
        id = null,
        titulo = "",
        tipo = "", //perdida o encontrada
        mascota = new Mascota({}),
        Ubicacion = new Ubicacion({}),
        fecha = new Date(),
        estado = "activa" //activa, resuelta, eliminada,
    }) {
        this.id = id;
        this.titulo = titulo;
        this.tipo = tipo;
        this.mascota = mascota;
        this.Ubicacion = Ubicacion;
        this.fecha = fecha;
        this.estado = estado;
    }
}
