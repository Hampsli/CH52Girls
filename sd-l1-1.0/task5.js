// Refer to Task 5 in your Instructions to complete this task

// let lineas = parseInt(prompt("Ingresa el numero de lineas que quieres que se impriman "));
let lineas =  50
for (let i = 0; i <= lineas; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
      console.log("Fizz");
  } else if (i % 5 === 0) {
      console.log("Buzz");
  } else if (i % 7 === 0) {
      console.log("Woof");
  } else {
      console.log(i);
    }
  }
// El error "ReferenceError: prompt is not defined" ocurre porque prompt() no está disponible en algunos entornos, como Node.js. Este método solo funciona en navegadores.
// Ejecutar en un navegador
// Si estás ejecutando tu código en Node.js, prueba ejecutarlo en la consola del navegador o en un archivo .html con <script>.
// Usar readline-sync en Node.js
// Si estás ejecutando el código en Node.js, puedes usar el paquete readline-sync para obtener la entrada del usuario.