export default class Mascota {
    constructor({
        id = null,
        nombre = "",
        especie = "",
        color = "",
        raza = "",
        sexo = "",
        edad = "",
        descripcion = "",
        foto = []
    }) { 
        this.id = id;
        this.nombre = nombre;
        this.especie = especie;
        this.color = color;
        this.raza = raza;
        this.edad = edad;
        this.sexo = sexo;
        this.descripcion = descripcion;
        this.foto = foto;
    } 
}