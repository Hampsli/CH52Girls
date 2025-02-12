export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  info() {
    console.log(`${this.name} ha alcanzado el nivel ${this.level}!`);
  }

  levelUp() {
    this.level++; // Incremento el nivel en 1
  }
}

const Player4 = new Player();
Player4.info(); 
Player4.levelUp();
Player4.info(); 