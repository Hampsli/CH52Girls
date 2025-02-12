export class Player {
  constructor(nombre, nivel) {
      this.nombre = nombre; 
      this.nivel = nivel;   
      this.experiencia = 0; 
      this.requisitoExperiencia = 100;  
  }
  
  info() {
      console.log(`${this.nombre} ha alcanzado el nivel ${this.nivel}!`);
  }

  levelUp() {
      this.nivel++;  
      console.log(`${this.nombre} ha subido al nivel ${this.nivel}!`);
  }

  ganaExperiencia(puntos) {
      this.experiencia += puntos;  

      console.log(`${this.nombre} ha ganado ${puntos} puntos de experiencia!`);
      
     
      while (this.experiencia >= this.requisitoExperiencia) {
          this.experiencia -= this.requisitoExperiencia;  
          this.levelUp();  
      }
const jugador = new Player("Tara", 1);

jugador.info();  
jugador.ganaExperiencia(50); 
jugador.ganaExperiencia(60); 

  }
}
