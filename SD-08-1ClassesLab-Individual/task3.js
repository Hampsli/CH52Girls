export class Player {
    constructor(name,level) {
      this.name = String(name);
      this.level= Number(level);
      this.info = function() {

        console.log(name+ " has reached Level " + level +"!" )

      }
      
    }
    
  }