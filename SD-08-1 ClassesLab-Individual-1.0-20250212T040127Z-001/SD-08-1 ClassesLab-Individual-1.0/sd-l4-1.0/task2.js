class Player {
    constructor(name,level) { //El constructor tiene 2 argumentos: nombre y nivel
      this.name = name; //asigna el valor de name a la propiedad name del objeto.
      this.level = level;  //asigna el valor de level a la propiedad level del objeto.
    }
}
      const player1 = new Player("Daniela", 5);
      console.log(player1);
      console.log(`Nombre: ${player1.name}, Nivel: ${player1.level}`);
    
  