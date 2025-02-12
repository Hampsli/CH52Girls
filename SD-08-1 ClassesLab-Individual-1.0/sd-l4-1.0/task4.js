export class Player {
    constructor(name, level) {
      this.name = name;
      this.level = level;
      
    }

    info(){
        console.log (`${this.name} has reached Level ${this.level}!`);
    }

    levelUp() {
      this.level++;
      console.log(`${this.name} leveled up to ${this.level}!`);
  
    }

  }
  
  import { Player } from './task3.js';

   const susana = new Player("Susana", 6);
   susana.info();
   susana.levelUp();
   susana.info();
 
   const carlos = new Player("Carlos", 10);
   carlos.info();
   carlos.levelUp();
   carlos.info();
 
   const nibi = new Player("Nibi", 5);
   nibi.info();
   nibi.levelUp();
   nibi.info();