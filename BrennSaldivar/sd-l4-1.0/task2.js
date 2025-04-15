export class Player {
  constructor(name, level) {
    this.name = name; 
    this.level = level;
  }
}


const player1 = new Player();





  /*2. You have now been asked to improve your code, 
  so that the player objects can define both a name and a level number.
    * Modify the Player class so that it will accept 
  a Player "name" string and a "**level**" number in two separate arguments.
        * The key of this property in the resulting object
   **must** be "`level`" - remember, **computers are very literal**! */