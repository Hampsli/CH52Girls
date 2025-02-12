export class Player {
    constructor(nombre, nivel) {
      this.nombre = nombre;  
      this.nivel = nivel;  
    }
    info() {
      console.log(`${this.nombre} ha alcanzado el nivel ${this.nivel}!`);

const jugador = new Player("Tara", 6);
jugador.info();  
    }
  }