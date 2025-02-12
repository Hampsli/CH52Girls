// Definimos la clase Player
export class Player {
  constructor(nombre, nivel) {
      this.nombre = nombre;  // Guardamos el nombre del jugador
      this.nivel = nivel;    // Guardamos el nivel del jugador
  }
  getNombre() {
      return this.nombre;
  }
  getNivel() {
      return this.nivel;
  }
}

const jugador1 = new Player("Ernesto", 5);

console.log("name" + ":" + jugador1.getNombre());  
console.log("nivel" + ":" + jugador1.getNivel());  
