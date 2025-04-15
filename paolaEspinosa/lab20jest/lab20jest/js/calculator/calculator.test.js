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

test("Divide dos numeros (10,2) y el resultado sera 5", () =>{
  expect(calculator.divide(10,2)).toBe(5);
})

test("Divide dos numeros (2,10) y el resultado sera 0.2", () =>{
  expect(calculator.divide(2,10)).toBe(0.2);
});

test("multiplica dos numeros (2,10) y el resultado sera 20", () =>{
  expect(calculator.multiply(2,10)).toBe(20);
});

test("multiplica dos numeros (500,40) y el resultado sera 20000", () =>{
  expect(calculator.multiply(500,40)).toBe(20000);
});

test('Devuelve un error cuando se pasa 0 como segundo argumento', () => {
  expect(calculator.divide(10, 0)).toThrow('Cannot divide by zero');
});
