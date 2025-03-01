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

test('divide 12/2 to equal 6', () => {
  expect(calculator.divide(12, 2)).toBe(6);
})

test('divide 20 / 2 to equal 10', ()=>{
  expect(calculator.divide(20, 2)).toBe(10);
})

test('multiply 5 by 8 to equal 40', () => {
  expect(calculator.multiply(5, 8)).toBe(40);
})

test('multiply 2.5 by 2 to equal 5', () =>{
  expect(calculator.multiply(2.5, 2)).toBe(5);
})

test('divide a number by cero to equal 0', () =>{
  expect(calculator.multiply(5, 0)).toBe(0);
})