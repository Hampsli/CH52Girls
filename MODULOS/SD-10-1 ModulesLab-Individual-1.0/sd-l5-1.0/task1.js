/* 1. Maria is calculating the cost of monthly payments. For every transaction there is a $3 fee and a 1% (0.01) interest fee. 
    * Given an input transaction amount, export a function that returns the value of what she should be paying.
        * This function should be able to take a number as input, and return a number as output.*/
//Función llamada costCalculator//(Parametro de entradad) Dato que se necesita para que se ejecute la función 
export function costCalculator(monto) {
  
// Dos cantidades a pagar 
// Fee- se usa constante porque es una tarifa fija
const fee = 3;

// Interest fee
const interes= monto * 0.01;

// Total a pagar 
const total= interes + fee + monto;

//Retornar el valor ()
return total; 
}

//Llamar a la función y asugnarle un valor
console.log(costCalculator (124));