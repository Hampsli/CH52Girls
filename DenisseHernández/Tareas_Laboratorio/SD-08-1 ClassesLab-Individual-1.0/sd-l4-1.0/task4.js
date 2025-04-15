export class Player {
  constructor(name,level) {
    this.name = name;
    this.level = level;
    

  }// fin de constructor

  info(){
    console.log(`${this.name} has reached Level ${this.level}!`);
  }

  levelUp(){
    this.level +=1;
    this.info();
  }

} // fin de export

const player1 = new Player("Grog", 4);
player1.info();
player1.levelUp();