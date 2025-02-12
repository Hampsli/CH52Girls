/**You are working on code that will be used in a video game. You have been asked to create an object class. These will be used to define players in that game. Each player can choose their own name, and these objects will be used to store them.
    * Modify the Player class so that it will accept a Player "**name**" in an argument.
        * The key of this property in the resulting object **must** be "`name`" - remember, **computers are very literal**! */

export class Player{
    constructor(name) {
      this.name = String (name);
      console.log (Player.name);
    
    }
  
  }
  