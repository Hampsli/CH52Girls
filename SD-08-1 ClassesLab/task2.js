import { Player } from './task1.js';

export class Player2 {
    constructor(name, level) {
      this.name = name;
      this.level = level;
      
    }
  }

  const player1 = new Player ("yesi");
  console.log(player1.name);

  const player2 = new Player2 ("Boneless", 10 );
  console.log(player2.name + " nivel:" + player2.level)
