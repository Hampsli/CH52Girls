//TASK 5

let result_3 = "Fizz";
let result_5 = "Buzz";
let result_7 = "Woof";
let result;

const prompt = require("prompt-sync")();
let number = parseInt(prompt("Ingrese el número hasta el que desee jugar [1 - 105]: "));

for (let i = 1; i < number+1; i++) {
  if (i % 3 == 0 & i % 5 == 0 & i % 7 == 0) {
    result = result_3 + result_5 + result_7;
  }
  else if (i % 3 == 0 & i % 5 == 0) {
    result = result_3 + result_5;
  }
  else if (i % 3 == 0 & i % 7 == 0) {
    result = result_3 + result_7;
  }
  else if (i % 5 == 0 & i % 7 == 0) {
    result = result_5 + result_7;
  }
  else if (i % 3 == 0) {
    result = result_3;
  }
  else if (i % 5 == 0) {
    result = result_5;
  }
  else if (i % 7 == 0) {
    result = result_7;
  }
  else {
    result = i;
  }
    
console.log(result);
};