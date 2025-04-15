export class Player {
    constructor(name) {
      this.name = name;
    }
    dameNombre() {
      return this.nombre;
  }
}

const jugador1 = new Player("Ernesto");
console.log(jugador1.dameNombre());