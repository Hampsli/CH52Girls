export class Player {
  constructor(nombre, nivel) {
      this.nombre = nombre;  
      this.nivel = nivel;    
      this.experiencia = 0; 
      this.requisitoExperiencia = 100;  
      this.inventario = {};  
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

 
  agregarElemento(elemento, cantidad) {
      if (this.inventario[elemento]) {
          
          this.inventario[elemento] += cantidad;
      } else {
          
          this.inventario[elemento] = cantidad;
      }
      console.log(`${cantidad} ${elemento}(s) han sido agregados al inventario.`);
  }

  
  eliminarElemento(elemento, cantidad) {
      if (this.inventario[elemento]) {
          if (this.inventario[elemento] >= cantidad) {
              this.inventario[elemento] -= cantidad;
              console.log(`${cantidad} ${elemento}(s) han sido eliminados del inventario.`);
              
              if (this.inventario[elemento] === 0) {
                  delete this.inventario[elemento];
                  console.log(`${elemento} ha sido completamente eliminado del inventario.`);
              }
          } else {
              console.log(`No tienes suficientes ${elemento}(s) para eliminar.`);
          }
      } else {
          console.log(`${elemento} no está en el inventario.`);
      }
  }

  mostrarInventario() {
      console.log("Inventario de " + this.nombre + ":");
      for (let item in this.inventario) {
          console.log(`${item}: ${this.inventario[item]}`);
      }
      
const jugador = new Player("Tara", 5);

jugador.mostrarInventario();  

jugador.agregarElemento("Pociones", 3);  
jugador.agregarElemento("Espadas", 2);   
jugador.agregarElemento("Pociones", 2);  

jugador.mostrarInventario();  

jugador.eliminarElemento("Pociones", 2);  
jugador.eliminarElemento("Espadas", 1);   

jugador.mostrarInventario();  
jugador.eliminarElemento("Arcos", 1);  

  }

}
