export class Player {
  constructor(name) {
      this.name = name;
  }
  toString() {
      return `Player Name: ${this.name}`}
  }

const player1 = new Player("Ana");
console.log(player1.toString());