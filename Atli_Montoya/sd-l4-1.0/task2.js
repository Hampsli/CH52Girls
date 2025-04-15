export class Player {
    constructor(name, level) {
      this.name = name;
      this.level = level; 
      
    };
 
  }

  const player1 = new Player ("Tobi", 27);

  console.log(`${player1.name} is at level ${player1.level}`)