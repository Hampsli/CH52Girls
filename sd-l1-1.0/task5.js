// Refer to Task 5 in your Instructions to complete this task

let hasta = prompt("¿Hasta qué número quieres que contemos?");
hasta = parseInt(hasta);

// ¡Importante! Verifica si la entrada es válida
if (isNaN(hasta) || hasta <= 0) {  // isNaN verifica si NO es un número
  console.log("Por favor, ingresa un número entero positivo válido.");
} else {
  for (let i = 1; i <= hasta; i++) {
    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
      console.log("FizzBuzzWoof");
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0 && i % 7 === 0) {
      console.log("FizzWoof");
    } else if (i % 5 === 0 && i % 7 === 0) {
      console.log("BuzzWoof");
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
}
