export class Player {
  constructor(name,level) {
    this.name = String(name);
    this.level= Number(level);
    this.info = function(){
      console.log(name+ " has reached Level " + level +"!" )}
    this.levelUp = function(){
      level = level + 1;
      console.log(name+ " has reached Level " + level +"!" )
    }

    
  }
  
}

const Taraplay = new Player("Tara",6);
Taraplay.info();
Taraplay.levelUp();