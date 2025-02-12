export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  info() {
    console.log(`${this.name} ha alcanzado el nivel ${this.level}!`);
  }
}

const Player3 = new Player("Tara", 6);
Player3.info();