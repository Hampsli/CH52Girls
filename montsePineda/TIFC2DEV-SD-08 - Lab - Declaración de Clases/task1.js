/*TASK 1
Modify the Player class so that it will accept a Player "**name**" in an argument.* 
The key of this property in the resulting object **must** be "`name`" - remember, **computers are very literal**!
*/

export class Player {
    constructor(name) {
      this.name=String(name);
      
    }

  }