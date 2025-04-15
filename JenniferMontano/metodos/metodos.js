/* Las funciones aplicadas a objetos se convierten en metodos. Estan formadas de dos partes una donde las declaramos y otra donde las mandamos llamar si no llamo a la funcion esta no se ejecuta)
Return lo que hace es devolvernos un valor, ese valor es un tipo de dato 
*/

function suma(num1, num2) {
  let operacion = num1 + num2;
  return operacion;
}

let resultado = suma(20, 20);
console.log(resultado);

function holi(nombre) {
  let saludo = `Holi ${nombre}, Bienvenide a la CH52`;
  console.log(saludo);
}

holi("Alumna"); // llamamos a la función con el argumento

// Funciones flecha ,porque aunque tengo un const, si utilizo la => lo reconoce como función.

const correr = (pista) => {
  let info = `felicidades vas a correr ${pista}`;
  console.log(info);
};

correr("10km");

// Math

const corr = () => {
  let distancia = Math.floor(Math.random() * 20) + 1;
  return `Felicidades vas a correr ${distancia}km`;
};

console.log(corr());

// toUpperCase

const saludar = (nombre) =>
  console.log(`Hola ${nombre.toUpperCase()}, bienvenid@ a la CH52`);
saludar("Fer");

// Propiedades de los objetos
// this. nos permite acceder a propiedades específicas de mi objeto

function Persona(nombre, apellido, edad, correo) {
  this.nombre = nombre;
  // en este casi aoellido es un método constructor
  this.apellido = apellido;
  this.edad = edad;
  this.correo = correo;

  this.fullName = function () {
    return `${this.nombre} ${this.apellido}`;
  };

  this.info = function () {
    return `Nombre: ${this.fullName()}, Edad: ${this.edad}, Correo: ${
      this.correo
    }`;
  };
}

// new es para instanciar a mis objetos, es una palabra reservada, crea al objeto y agrega los atributos
const persona1 = new Persona("Andrea", "Velazques", 25, "andrea@gmail.com");
const persona2 = new Persona("Dani", "Contreras", 25, "dani@gmail.com");

console.log(persona1.info());
console.log(persona2.fullName());
