export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  info() {
    console.log(this.name + " has reached Level " + this.level + "!");
  }

  levelUp(increase) {
    this.level++; 
    console.log(`${this.name} ha subido al nivel ${this.level}!:O`);
  }
}
import { Player } from "./task2";
const yesi = levelUp();
yesi.info();
yesi.levelUp();
yesi.info();
