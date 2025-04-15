export class Player {
  constructor(name,level) {
    this.name = name;
    this.level = level;

  }// fin de constructor

  info(){
    console.log(`${this.name} has reached Level ${this.level}!`);
  }

} // fin de export

const player1 = new Player("Denisse", 6);
player1.info();