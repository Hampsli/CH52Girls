//TASK 6

let result_3 = "Fizz";
let result_5 = "Buzz";
let result_7 = "Woof";
let result;

let lista_fizzbuzz = new Array();

const prompt = require("prompt-sync")();
let number = parseInt(prompt("Ingrese el número hasta el que desee jugar [1 - 105]: "));

for (let i = 1; i < number+1; i++) {
  if (i % 3 == 0 & i % 5 == 0 & i % 7 == 0) {
    result = result_3 + result_5 + result_7;
    tolist = lista_fizzbuzz.push(result);
  }
  else if (i % 3 == 0 & i % 5 == 0) {
    result = result_3 + result_5;
    tolist = lista_fizzbuzz.push(result);
  }
  else if (i % 3 == 0 & i % 7 == 0) {
    result = result_3 + result_7;
    tolist = lista_fizzbuzz.push(result);
  }
  else if (i % 5 == 0 & i % 7 == 0) {
    result = result_5 + result_7;
    tolist = lista_fizzbuzz.push(result);
  }
  else if (i % 3 == 0) {
    result = result_3;
    tolist = lista_fizzbuzz.push(result);
  }
  else if (i % 5 == 0) {
    result = result_5;
    tolist = lista_fizzbuzz.push(result);
  }
  else if (i % 7 == 0) {
    result = result_7;
    tolist = lista_fizzbuzz.push(result);
  }
  else {
    result = i;
    tolist = lista_fizzbuzz.push(result);
  }
    
console.log(result);
};

console.log("Su lista se ve así: ");
//console.log(JSON.stringify(lista_fizzbuzz));
console.log(lista_fizzbuzz);