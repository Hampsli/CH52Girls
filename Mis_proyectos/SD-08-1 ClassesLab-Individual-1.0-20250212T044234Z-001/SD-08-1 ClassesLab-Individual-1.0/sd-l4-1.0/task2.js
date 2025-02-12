export class Player {
    constructor(nombre, nivel) {
      this.nombre = nombre; 
      this.nivel = nivel;
      
      const jugador1 = new Player("Carlos", 5);
      const jugador2 = new Player("Ana", 3);
      
      console.log(jugador1.nombre, jugador1.nivel);  
      console.log(jugador2.nombre, jugador2.nivel);  
      
    }
    
  }