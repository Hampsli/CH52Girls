/*TASSK 3
* Modify the Player class so that it will accept a player name string and a level number in two separate arguments.
* Then, define a shared object method `info()` that will print the following string, replacing the two placeholders:
  * `<name> has reached Level <level>!`
    * A player named **Tara** at level **6** should result in "`Tara has reached Level 6!`" printed to the console. */

export class Player {
  constructor(name,level) {
    this.name=String(name);
    this.level=Number(level);
  }
  info(){
    console.log(`${this.name} has reached Level ${this.level}!`);
  }
    
  }