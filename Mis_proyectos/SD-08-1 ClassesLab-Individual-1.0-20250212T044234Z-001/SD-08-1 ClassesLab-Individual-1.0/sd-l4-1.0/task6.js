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
  }
}

class Group {
  constructor() {
      this.miembros = [];  
  }

  agregarJugador(jugador) {
      this.miembros.push(jugador);  
      console.log(`${jugador.nombre} ha sido agregado al grupo.`);
  }

  eliminarJugador(jugador) {
      const index = this.miembros.indexOf(jugador);  
      if (index > -1) {
          this.miembros.splice(index, 1); 
          console.log(`${jugador.nombre} ha sido eliminado del grupo.`);
      } else {
          console.log(`${jugador.nombre} no está en el grupo.`);
      }
  }

  mostrarMiembros() {
      console.log("Miembros del grupo:");
      this.miembros.forEach(miembro => {
          console.log(`${miembro.nombre} - Nivel ${miembro.nivel}`);
      });
  

const jugador1 = new Player("Tara", 5);
const jugador2 = new Player("Carlos", 3);
const jugador3 = new Player("Lina", 8);

const grupo = new Group();

grupo.agregarJugador(jugador1);
grupo.agregarJugador(jugador2);
grupo.agregarJugador(jugador3);

grupo.mostrarMiembros();

grupo.eliminarJugador(jugador2); 
grupo.mostrarMiembros();

}
}
