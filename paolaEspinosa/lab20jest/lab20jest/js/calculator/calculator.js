const add = function(a, b) {
    return a + b;
}
const subtract = function(a, b) {
  module.exports = {add: add, subtract: subtract};
  return a - b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function multiply(a, b){
   var resultado= a*b;
  return resultado;
}

// When you want to use the divide or multiple function, remember to add it to the export here
module.exports = {add: add, subtract: subtract, divide: divide, multiply: multiply};