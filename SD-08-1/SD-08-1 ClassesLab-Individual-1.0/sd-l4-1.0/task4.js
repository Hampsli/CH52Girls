export class Player {
    constructor() {
      
    }
  
    
  }
  class Player {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    info() {
        console.log(`${this.name} has reached Level ${this.level}!`);
    }

    levelUp() {
        this.level++; // Incrementa el nivel en 1
        console.log(`${this.name} leveled up! Now at Level ${this.level}.`);
    }
}

// Probamos el método
const player1 = new Player("Tara", 6);
player1.info();    // "Tara has reached Level 6!"
player1.levelUp(); // "Tara leveled up! Now at Level 7."
