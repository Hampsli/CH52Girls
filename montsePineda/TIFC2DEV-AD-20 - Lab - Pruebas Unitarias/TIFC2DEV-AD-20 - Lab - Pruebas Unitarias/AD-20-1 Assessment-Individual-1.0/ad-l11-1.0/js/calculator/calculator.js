const add = function(a, b) {
    return a + b;
}
const subtract = function(a, b) {
  return a - b;
}

function divide(a, b){
  if(b==0){
    return "Indefinido"
  }else{ return a / b; }
}

function multiply(a, b){
  return a * b;
}

// When you want to use the divide or multiple function, remember to add it to the export here
module.exports = {add: add, subtract: subtract, divide:divide, multiply:multiply};
//3. Se verifica que no se está expotando el modulo de divide y se corrige, de igual forma para multiply