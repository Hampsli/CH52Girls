export class Player {
  constructor(name, level) {
      this.name = name;
      this.level = level;
  }
  toString() {
    return `Player name: ${this.name}`;
  }
  toNumber() {
    return `Player level: ${this.level}`;
  }
  info() {
    console.log(`${this.name} has reached Level ${this.level}!`);
  }
  levelUp(numUp) {
    this.level += numUp;
    console.log(`${this.name} has reached Level ${this.level}!`);
  }
}
const player1 = new Player("Grog", 4);
console.log(player1.toString(), player1.toNumber());
player1.info();
player1.levelUp(1);

