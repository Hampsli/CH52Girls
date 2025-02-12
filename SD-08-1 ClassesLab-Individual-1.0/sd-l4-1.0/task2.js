export class Player {
  constructor(name,level) {
      this.name = name;
      this.level = level;
  }

  toString() { //para regresar como cadena
      return `Player { name:'${this.name}' }`;//nos regresa el resultado de la funcion 
  }
  
  toNumber() { //para regresar como numero
      return `Player level:'${this.level}' }`;//nos regresa el resultado de la funcion 
  }  
  }
 

const player = new Player("Dany", 3);
console.log(player.toString, player.toNumber());