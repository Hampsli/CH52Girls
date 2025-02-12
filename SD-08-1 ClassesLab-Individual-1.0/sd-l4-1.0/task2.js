export class Player {
  constructor(name, level) {
      this.name = name;
      this.level = level;
  }
  toString() {
      return `Player name: ${this.name}`
    }
  toNumber(){
    return `Player level: ${this.level}`
  }
  }

const player1 = new Player("Ana", 5);
console.log(player1.toString(), player1.toNumber());