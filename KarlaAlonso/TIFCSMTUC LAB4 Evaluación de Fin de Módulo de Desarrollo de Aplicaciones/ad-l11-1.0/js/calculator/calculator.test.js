const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});
//Funcionalidad: Calcular una división a partir de dos números positivos
test('probar divide usando (10, 5) esperando 2', ()=>{
  expect(calculator.divide(10, 5)).toBe(2);
});
//Funcionalidad: Calcular una división a partir de dos números positivos
test("divide (-10 / 2) debe ser -5", () => {
  expect(calculator.divide(-10, 2)).toBe(-5);
});
//Funcionalidad: Calcular una multiplicación a partir de dos números uno positivo y otro negativo
test("divide (-18 * 6) debe ser -108", () => {
  expect(calculator.multiply(-18, 6)).toBe(-108);
});
//Funcionalidad: Calcular una multiplicación a partir de dos números negativos
test("divide (-90 * -15) debe ser 1350", () => {
  expect(calculator.multiply(-90, -15)).toBe(1350);
});
//Funcionalidad: prueba unitaria para verificar la función divide() pasando 0 como segundo argumento.
test('debe devolver Infinity cuando se intenta dividir por 0', () => {
  expect(calculator.divide(10, 0)).toBe(Infinity); // Verifica que el resultado sea Infinity
});
