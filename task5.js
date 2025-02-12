export class Player { 
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.experience = 0;      
    this.expToLevel = 100;    
  }
  
  info() {
    console.log(`${this.name} has reached Level ${this.level}!`);
  }
  
  levelUp() {
    this.level++;
    console.log(`${this.name} leveled up! Now at Level ${this.level}`);
  }
  
  gainExp(exp) {
    this.experience += exp;
    console.log(`${this.name} gained ${exp} exp. Total exp: ${this.experience}`);
   
    while (this.experience >= this.expToLevel) {
      this.experience -= this.expToLevel;
      this.levelUp();
    }
  }
}

