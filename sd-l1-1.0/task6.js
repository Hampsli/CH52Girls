// Refer to Task 6 in your Instructions to complete this task

let lista = []
for (let i = 0; i <= 105; i++) {
  if (i % 15 === 0) {
    return "FizzBuzz";
  } else if (i % 3 === 0) {
      return "Fizz";
  } else if (i % 5 === 0) {
      return "Buzz";
  } else if (i % 7 === 0) {
      return "Woof";
  } else {
      return i;
    }
  }
console.log(lista)