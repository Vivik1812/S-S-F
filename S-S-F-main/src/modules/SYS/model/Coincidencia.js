import Publicacion from "./Publicacion";
export default class Coincidencia {
    constructor({
        id = null,
        postPerdido = new Publicacion(),
        postEncontrado = new Publicacion(),
        NvlCoincidencia = 0, //20(poco probable) - 60(probable) - 90(casi seguro)
        fecha = new Date(),
        estado = "pendiente" //pendiente, aceptada, rechazada
    })
    {   this.id = id;
        this.postPerdido = postPerdido;
        this.postEncontrado = postEncontrado;
        this.NvlCoincidencia = NvlCoincidencia;
        this.fecha = fecha;
        this.estado = estado;
    }
}
