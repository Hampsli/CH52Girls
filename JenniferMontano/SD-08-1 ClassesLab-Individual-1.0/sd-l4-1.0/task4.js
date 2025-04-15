export class Player {
  // instancia
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
  // metodo
  info() {
    console.log(`${this.name} has reached Level ${this.level}!`);
  }

  levelUp() {
    this.level += 1; //con el operador de asignación incrementamos en 1
    this.info();
  }
}

const player = new Player("Grog", 4);
player.info();
player.levelUp();
