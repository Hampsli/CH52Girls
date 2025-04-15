/* TASK 2
Modify the Player class so that it will accept a Player "name" string and a "**level**" 
number in two separate arguments.* The key of this property in the resulting object 
**must** be "`level`" - remember, **computers are very literal**!
 */


export class Player {
  constructor(name,level) {
    this.name=String(name);
    this.level=Number(level);
  }
  
    
  }