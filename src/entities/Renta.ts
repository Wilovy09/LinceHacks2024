import Ubi from "./Ubicacion";

export default class Renta {
    idRenta: number = 0;
    ubicacion: Ubi = new Ubi(0, 0, "", "", "", 0);
    costo: number = 0;
    costoServicios: number = 0;
    cuartos: number = 1;
    banos: number = 0;
    photosURL: string[] = [];

    constructor (idRenta: number, ubicacion: Ubi, costo: number, costoServicios: number, cuartos: number, banos: number, photosURL: string[]) {
        this.idRenta = idRenta;
        this.ubicacion = ubicacion;
        this.costo = costo;
        this.costoServicios = costoServicios;
        this.cuartos = cuartos;
        this.banos = banos;
        this.photosURL = photosURL;
    }
}