export default class Notificacion {
    constructor({
        id = null,
        usuarioId = null,
        titulo = "",
        mensaje = "",
        tipo = "INFO", //INFO, COINCIDENCIA
        IdpostRelacionado = null, //id de la publicacion (solo si aplica)
        isRead = false, //false = no leida, true = leida
        fechaCreacion = new Date(),
    }) {
        this.id = id;
        this.usuarioId = usuarioId;
        this.titulo = titulo;
        this.mensaje = mensaje;
        this.tipo = tipo;
        this.IdpostRelacionado = IdpostRelacionado;
        this.isRead = isRead;
        this.fechaCreacion = fechaCreacion;
    }
}