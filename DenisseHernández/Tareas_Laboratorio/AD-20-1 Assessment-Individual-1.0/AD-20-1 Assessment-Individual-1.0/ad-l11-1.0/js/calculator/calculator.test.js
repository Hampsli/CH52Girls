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

//Mis pruebas para la division

test('Divicion entre 10 y 2 esperando un 5',()=>{
  expect(calculator.divide(10,2)).toBe(5);
})

test('Divicion entre 40 y 7 esperando un 5.714285714285714',()=>{ // la verdad no esperaba que aceptara asi jajaja, genial
  expect(calculator.divide(40,7)).toBe(5.714285714285714);
})

//Mis pruebas para la Multiplicacion
test('Multiplica 6 por 3 y espero un 18',()=>{
  expect(calculator.multiply(6,3)).toBe(18);
})

test('Miltiplica 9 por 7 y espero un 63',()=>{
  expect(calculator.multiply(9,7)).toBe(63);
})

