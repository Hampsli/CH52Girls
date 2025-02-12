export class Player{
  constructor(name, level) {
    this.name = String (process.argv[3]);
    this.level = Number (process.argv[4]);
    this.info = function (){
      console.log(`${name} has reached Level ${level}!`);
    }
  
  }

}