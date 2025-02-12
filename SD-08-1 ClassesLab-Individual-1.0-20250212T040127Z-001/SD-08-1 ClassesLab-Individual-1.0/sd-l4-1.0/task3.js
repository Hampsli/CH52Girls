//Retomando el codigo de la tarea anterior
  class Player {
    constructor(name,level) { 
      this.name = name; 
      this.level = level; 
    }

    info(){  //El metodo info() accede a las propiedades name y level a traves de this.name y this.level
      console.log(`${this.name} has reached Level ${this.level}!`); //Se imprime el mensaje y se juntan las cadenas con ${}
    }
  } 

  const player1 = new Player("Daniela", 5);
  player1.info();