export class Player {
  constructor(name) {
      this.name = name;
  }

  toString() { //para regresar como cadena
      return `Player { name:'${this.name}' }`;//nos regresa el resultado de la funcion 
  }
}

// Example usage:
const player = new Player("Dany");
console.log(player.toString());