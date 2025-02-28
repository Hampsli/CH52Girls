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

//Test para divide
test("divide 10 entre 2 es igual a 5", () => {
  expect(calculator.divide(10,2)).toBe(5);
});

test("divide -10 entre 2 es igual a 5", () => {
  expect(calculator.divide(-10,2)).toBe(-5);
});

//Test para multiply
test("multiplica 6 por 3 es igual a 18", () =>{
  expect(calculator.multiply(6,3)).toBe(18);
});

test("multiplica -6 por 3 es igual a 18", () =>{
  expect(calculator.multiply(-6,3)).toBe(-18);
});

// Test para dividir entre 0
test("dividir entre 0 debe devolver un error", () => {
  expect(calculator.divide(10, 0)).toBe("División número entre 0 no permitida");
});