export class Player {
    constructor(name, level) {
      this.name = name;
      this.level = level;
      
    }

    info(){
      console.log(`${this.name} has reached Level ${this.level}!`);
    }
    
    
  }


  const susana = new Player("Susana", 6);
  susana.info();

  const carlos = new Player("Carlos", 10);
  carlos.info();

  const nibi = new Player("Nibi", 5);
  nibi.info();