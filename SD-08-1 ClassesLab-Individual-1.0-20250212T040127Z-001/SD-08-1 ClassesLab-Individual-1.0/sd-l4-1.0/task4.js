//Retomando el codigo anterior
export class Player {
  constructor(name,level) { 
    this.name = name; 
    this.level = level; 
  }

  info(){  
    console.log(`${this.name} has reached Level ${this.level}!`); 
  }
  levelUp() { //Este nuevo metodo incrementa el nivel del jugador en 1 (++). Cada vez que se llama a levelUp(), el nivel se incrementa en 1.
    this.level++; // Incrementa el nivel del jugador en 1
    console.log(`${this.name} is now at Level ${this.level}!`);
}

} 

const player1 = new Player("Daniela", 7);
player1.info();