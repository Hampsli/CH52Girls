export class Player {
    constructor(name, level) {
      this.name = name;
      this.level = level;
    }
    info(){
      console.log(`${this.name} has reached Level ${this.level}!`);
    }
    levelUp(){
      this.level++;
    }
    
  }

  const grog = new Player("Grog", 4);
  grog.info();
  grog.levelUp();
  grog.info();