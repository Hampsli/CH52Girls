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