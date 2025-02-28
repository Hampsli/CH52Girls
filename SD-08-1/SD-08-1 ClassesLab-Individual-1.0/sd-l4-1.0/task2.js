export class Player {
    constructor() {
      
    }
  
    
  }
  class Player {
    constructor(name, level) { // Ahora el constructor recibe nombre y nivel
        this.name = name;
        this.level = level;
    }
}

// Probamos creando un jugador
const player1 = new Player("Tara", 6);
console.log(player1.name);  // "Tara"
console.log(player1.level); // 6
