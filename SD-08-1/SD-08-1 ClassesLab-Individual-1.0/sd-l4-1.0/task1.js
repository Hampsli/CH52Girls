/*export class Player {
    constructor() {
      
    }
  
    
  }*/
  class Player {
    constructor(name) { // El constructor recibe el nombre del jugador
        this.name = name; // Asigna el nombre a la propiedad name
    }
}

// Probamos creando un jugador
const player1 = new Player("Tara");
console.log(player1.name); // Debería mostrar "Tara"
