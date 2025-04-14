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

test('divide 2 / 2 to equal 1', () => {
  expect(calculator.divide(2, 2)).toBe(1);
});

test('divide -6 / 2 to equal 3', () => {
  expect(calculator.divide(-6, 2)).toBe(-3);
});

test("División por 0 debe lanzar un error", () => {
  function dividirPorCero() {
      calculator.divide(10, 0);
  }
  expect(dividirPorCero).toThrow("No se puede dividir por 0");
});

test('multiply 5 * 5 to equal 25', ()=>{
  expect(calculator.multiply(5, 5)).toBe(25);
});

test('multiply -3 * 3 to equal -9', ()=>{
  expect(calculator.multiply(-3, 3)).toBe(-9);
});

