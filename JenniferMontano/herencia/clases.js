class Perro {
  // esta es la función
  constructor(color, raza) {
    this.color = color;
    this.raza = raza;
  }
  // este es el método
  ladrar() {
    console.log("Wuuf!");
  }
}

const perro1 = new Perro("gris", "pupet");
perro1.ladrar();
