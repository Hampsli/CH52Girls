class Player {   //Aqui se define la clase llamada Player. El "export" permite que la clase sea utilizada en otros archivos.
  constructor(name) { //Se crea el constructor que se ejecuta cuando se crea un nuevo objeto de la clase. Reibe un argumento (name)
    this.name = name; //Se da valor al name. This se refiere al objeto actual de la clase (jugador). Cada que haya un nuevo player, sera almacenado aqui.
    }
    getName() {
      return this.name;
    }
  }

const player1 = new Player("Daniela");
console.log(player1.getName());