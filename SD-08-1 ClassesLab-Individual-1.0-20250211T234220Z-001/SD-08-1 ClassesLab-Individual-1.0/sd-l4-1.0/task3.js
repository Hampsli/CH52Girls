export class Player {
  constructor(name, level) {
    this.name=name;
    this.level=level;
    this.info = function(){
      console.log(`${name} has reached Level ${level}!`);
    };
  }

  
}