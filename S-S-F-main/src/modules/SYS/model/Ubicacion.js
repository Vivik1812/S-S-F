export default class Ubicacion {
    constructor({
        calle = '',
        numero = '',
        comuna = '',
        region = '',
        referencia = ''
    }) {
        this.calle = calle;
        this.numero = numero;
        this.comuna = comuna;
        this.region = region;
        this.referencia = referencia;
    }

    getDireccionCompleta() {
        return `${this.calle} ${this.numero}, ${this.comuna}, ${this.region}`;
}}