export class FriendAge {
    constructor(nombre, año, mes, dia) {
        this.nombre = nombre;
        this.año = año;
        this.mes = mes;
        this.dia = dia;
    }

    returnAge() {
        const hoy = new Date();
        const fechaNacimiento = new Date(this.año, this.mes - 1, this.dia); //los meses en date se representan con un índice basado en 0, es decir: 0 es enero, 1 febrero...
        
        