
export class Player {
  constructor(name, level) {
    this.name=name;
    this.level=parseInt(level);
    this.info = function(){
      return `${this.name} has reached Level ${this.level}!`
    };
    this.levelUp = function(){
      return this.level++;
    };
  }

  
}

/*
 // Clase Player con los métodos requeridos
export class Player {
    constructor(name, level) {
        this.name = name; // 'name' debe ser un string
        this.level = level; // 'level' debe ser un número
    }

    // Método para mostrar la información del jugador
    info() {
        console.log(`${this.name} has reached Level ${this.level}!`);
    }

    // Método para subir de nivel al jugador
    levelUp() {
        this.level += 1; // Aumentamos el nivel en 1
    }
}

*/
