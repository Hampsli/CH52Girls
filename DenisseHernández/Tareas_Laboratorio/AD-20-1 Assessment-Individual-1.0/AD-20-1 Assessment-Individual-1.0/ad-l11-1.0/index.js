const calculator = require('./js/calculator/calculator.js')


// La verdad no se que tenia que poner aqui porque no me estaba agarrando nada
// perooo mis test los tengo en los test dentro de la carpeta Js y aqui si me marcaba lo que estaba y no bien 

// Act 4
test("Debe manejar la división por 0 correctamente", () => {
    expect(() => calculator.divide(10, 0)).toThrow("No se puede dividir por cero");
});