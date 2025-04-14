const calculator = require("./calculator");

test("adds 1 + 2 to equal 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("adds -4 + 8 to equal 4", () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test("subtract 5 - 4 to equal 1", () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test("subtract -5 - -10 to equal 5", () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

// 2 pruebas para la función divide
test("divide 10 / 2 to equal 5", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("divide 8 / 4 to equal 2", () => {
  expect(calculator.divide(8, 4)).toBe(2);
});

// 2 pruebas para la función multiply
test("multiply 3 * 3 to equal 9", () => {
  expect(calculator.multiply(3, 3)).toBe(9);
});

test("multiply 5 * 5 to equal 25", () => {
  expect(calculator.multiply(5, 5)).toBe(25);
});

// Tarea 3, pasando 0 como segundo argumento
test("Si dividimos por cero, devolverá un error de: ¡Error: división por cero!", () => {
  expect(calculator.divide(100, 0)).toBe("¡Error: división por cero!");
});
