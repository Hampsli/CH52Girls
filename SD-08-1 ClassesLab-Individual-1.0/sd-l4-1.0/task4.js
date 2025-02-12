export class Player {
    constructor(name,level) {
      this.name = name;
      this.level = level;
      this.info = function() {
        return(`${this.name} has reached Level ${this.level}!`);
      }
  
    }

    levelUp() {
      this.level++;
    }
    
  }
  let namePlayer = process.argv[3]; 
  let levelNum = process.argv[4];
  const player1 = new Player();
  console.log(player1.info());
  player1.levelUp();
  player1.info(); 