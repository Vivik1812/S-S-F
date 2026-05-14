export default class MotorCoincidencia {
    static calcularCoincidencia(postPerdido, postEncontrado) {
        let NvlCoincidencia = 0;

        //especie
        if (postPerdido.especie === postEncontrado.especie) {
            NvlCoincidencia += 20;}
        
        //raza
        if (postPerdido.raza === postEncontrado.raza) {
            NvlCoincidencia += 20;}

        //color
        if (postPerdido.color === postEncontrado.color) {
            NvlCoincidencia += 20;}
        
        //sexo
        if (postPerdido.sexo === postEncontrado.sexo) {
            NvlCoincidencia += 20;}

        //Fecha cercana(menos de 5 dias)
        const difDias = Math.abs(
            new Date(postPerdido.fecha).getTime() - new Date(postEncontrado.fecha).getTime()
        ) / (1000 * 3600 * 24); //para convertir a dias
        if (difDias <= 5) {
            NvlCoincidencia += 10;
        }
        return NvlCoincidencia;
    }
}
