//TASK 7

let buzzWords = [
  "Fizz",
  "Buzz",
  "Woof",
  "Bark",
  "Awoo",
  "Bang"
];

let buzzNumbers = new Array();

const prompt = require("prompt-sync")();
let number = parseInt(prompt("Ingrese el número hasta el que desee jugar [1 - 105]: "));

let result;

for (let i = 1; i < number+1; i++) {
if (i % 3 == 0 & i % 5 == 0 & i % 7 == 0 & i % 11 == 0) {
  result = buzzWords[0] + buzzWords[1] + buzzWords[2] + buzzWords[3];
  toList = buzzNumbers.push(result);
}
else if (i % 3 == 0 & i % 5 == 0 & i % 7 == 0) {
  result = buzzWords[0] + buzzWords[1] + buzzWords[2];
  toList = buzzNumbers.push(result);
}
else if (i % 3 == 0 & i % 5 == 0 & i % 11 == 0) {
  result = buzzWords[0] + buzzWords[1] + buzzWords[3];
  toList = buzzNumbers.push(result);
}
else if (i % 3 == 0 & i % 5 == 0) {
  result = buzzWords[0] + buzzWords[1];
  toList = buzzNumbers.push(result);
}
else if (i % 3 == 0 & i % 7 == 0) {
  result = buzzWords[0] + buzzWords[2];
  toList = buzzNumbers.push(result);
}
else if (i % 3 == 0 & i % 11 == 0) {
  result = buzzWords[0] + buzzWords[3];
  toList = buzzNumbers.push(result);
}
else if (i % 5 == 0 & i % 7 == 0) {
  result = buzzWords[1] + buzzWords[2];
  toList = buzzNumbers.push(result);
}
else if (i % 5 == 0 & i % 11 == 0) {
  result = buzzWords[1] + buzzWords[3];
  toList = buzzNumbers.push(result);
}
else if (i % 3 == 0) {
  result = buzzWords[0];
  toList = buzzNumbers.push(result);
}
else if (i % 5 == 0) {
  result = buzzWords[1];
  toList = buzzNumbers.push(result);
}
else if (i % 7 == 0) {
  result = buzzWords[2];
  toList = buzzNumbers.push(result);
}
else if (i % 11 == 0) {
  result = buzzWords[3];
  toList = buzzNumbers.push(result);
}
else {
  result = i;
  toList = buzzNumbers.push(result);
}
  
console.log(result);
};

console.log("Su lista se ve así: ");
//console.log(JSON.stringify(buzzNumbers));
console.log(buzzNumbers);