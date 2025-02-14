export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  info(){
    console.log(`${this.name} ha llegado al nivel ${this.level}!!! :D`);
  }
}

const yesi = new Player("yesi", 11);
yesi.info();

const Boneless = new Player("Boneless", 10);
Boneless.info();