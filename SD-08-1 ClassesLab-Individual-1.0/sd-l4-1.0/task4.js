export class Player {
  constructor(name,level) {
    this.name = name;   
    this.level = level;   
  }
  info() {
    console.log(`${this.name} has reached Level ${this.level}!`);
  }
  levelUp() {
    this.level ++;  
    console.log(`${this.name} leveled up! Now at Level ${this.level}!`);
  }
}


const player1 = new Player("Luka",9);  

console.log(player1.name);
console.log(player1.level);

player1.info();
player1.levelUp();
player1.info();