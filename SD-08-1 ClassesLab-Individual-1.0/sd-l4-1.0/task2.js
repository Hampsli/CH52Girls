export class Player {
  constructor(name,level) {
    this.name = name;   
    this.level = level;   
  }
}

const player1 = new Player("Luka",9);  

console.log(player1.name);
console.log(player1.level);