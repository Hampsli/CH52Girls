export class Player { 
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
  
  info() {
    console.log(`${this.name} has reached Level ${this.level}!`);
  }
  
  levelUp() {
    this.level++;
  }
}

const player = new Player("Tara", 6);
player.info();  
player.levelUp();
player.info();  

