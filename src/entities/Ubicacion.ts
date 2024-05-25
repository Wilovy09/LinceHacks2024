export default class Ubicacion {
    latitud: number = 0;
    longitud: number = 0;
    calle: string = "";
    ciudad: string = "";
    estado: string = "";
    codigoPostal: number = 0;

    constructor(latitud: number, longitud: number, calle: string, ciudad: string, estado: string, codigoPostal: number) {
        this.latitud = latitud;
        this.longitud = longitud;
        this.calle = calle;
        this.ciudad = ciudad;
        this.estado = estado;
        this.codigoPostal = codigoPostal;
    }
}