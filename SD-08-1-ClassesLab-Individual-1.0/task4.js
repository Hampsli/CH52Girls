export class Player {
    constructor(name, level) {
      this.name = name;
      this.level = level;
    }
  
    info() {
      console.log(this.name + " has reached Level " + this.level + "!");
    }

    levelUp(increase) {
      this.level = this.level + increase;
    }
  }

  const player4 = new Player("Grog", 4);
  player4.info();

  player4.levelUp(1);
  player4.info();