export class Player {
  
  constructor(name, level) {
    this.name = name;  
    this.level = level;  
    
  }

  
  info() {
    console.log(`${this.name} has reached Level ${this.level}!`);
  }

  levelUp(){
    return(level++);
  }

}


const player1 = new Player("Grog", 5);




    /* Finally, define a second shared object method named `levelUp()` that will
    *  **increment** the level of the Player.**/