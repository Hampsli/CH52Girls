// Refer to Task 3 in your Instructions to complete this task

for (let i = 0; i <= 105; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
      console.log("Fizz");
  } else if (i % 5 === 0) {
      console.log("Buzz");
  } else {
      console.log(i);
    }
  }

// JavaScript no usa elif, solo else if.
// No deben estar después de if o else if.
// Después de else if, las llaves {} deben agrupar correctamente el bloque de código.