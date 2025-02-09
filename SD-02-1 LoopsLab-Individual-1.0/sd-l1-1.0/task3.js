// Refer to Task 3 in your Instructions to complete this task

for (let i = 1; i <= 105; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz"); // Si i es modulo de 3 Y de 5 entonces, imprime: "FizzBuzz"
  } else if (i % 3 === 0) {
      console.log("Fizz"); // Múltiplo de 3
  } else if (i % 5 === 0) {
      console.log("Buzz"); // Múltiplo de 5
  } else {
      console.log(i); // No es múltiplo de 3 ni de 5
  }
}

