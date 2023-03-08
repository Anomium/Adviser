export class Archivo {
    base64: string;
    nombre: string;
    size: BigInteger;
    tipo: string;

    constructor(base64: string, nombre: string, size: BigInteger, tipo: string) {
        this.base64 = base64;
        this.nombre = nombre;
        this.size = size;
        this.tipo = tipo;
    }
}