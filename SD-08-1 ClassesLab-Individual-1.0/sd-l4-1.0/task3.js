export class Player {
  constructor(name,level) {
      this.name = name;
      this.level = level;
  }

  info(){
    console.log(`${this.name} has reached Level ${this.level}!`)
  }

  toString() { 
      return `Player name: ${this.name}`
  }
  
  toNumber(){ 
      return `Player level: ${this.level}`
  }  
  }

const player = new Player("Dany", 3);
console.log(player.toString(), player.toNumber());
player.info()