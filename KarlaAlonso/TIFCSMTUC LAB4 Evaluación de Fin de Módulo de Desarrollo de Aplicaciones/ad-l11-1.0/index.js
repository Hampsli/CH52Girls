const calculator = require('./js/calculator/calculator.js')

const resultadoDivision = calculator.divide(10,5);
console.log(resultadoDivision);

const resultadoDivisionNegativa = calculator.divide(-10,5);
console.log(resultadoDivisionNegativa);

const resultadoMultPosyNeg = calculator.multiply(-18, 6);
console.log(resultadoMultPosyNeg);

const resultadoMultNegativos = calculator.multiply(-90, -15);
console.log(resultadoMultNegativos);