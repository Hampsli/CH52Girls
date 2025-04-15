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

//TAREA 1. Implementar pruebas para el módulo ./js/calculator/calculator.js.
//Implementar 2 pruebas unitarias para la función divide().

//1.Se crea una nueva prueba 
test('divide 10 / 2 to equal 2', () => { // fn -> a/b
  expect(calculator.divide(10,2)).toBe(5);
})
//2.Ejecutamos las pruebas ->falla nuestra prueba, como debe
/* Falla porque TypeError: calculator.divide is not a function */
//3.Se debe rescribir el código, fue en el calculator.js
//4.Se vuelve a realizar la prueba -> se pasó junto con las anteriores
//5.Se refactoriza el código, no tiene nada que refactorizar, entnces todo bien

//Segunda prueba

test('divide 36/6 to equal 6', ()=> {
  expect(calculator.divide(36,6)).toBe(6);
})
//Se ejecuta la prueba y pasa porque el código ya fue refactorizado para funcionar correctamente 

//Implementar 2 pruebas unitarias para la función multiply().

test('muntiply 4 * 5 to equal 20', ()=>{
  expect(calculator.multiply(4,5)).toBe(20);
})
/*2.Se corre el test-> falla 
3.Se reescribe el código -> en calculator.js
4.Se vuelve a realizar la prueba -> se pasa correctamente
5.Se refactoriza el código ->no tiene nada que refactoriza se concluye*/

//Segunda prueba
test('multiply 12 * 17 to equal 204', () =>{
  expect(calculator.multiply(12,17)).toBe(204);
})
//Todo sale correcto


//Usar el Desarrollo Orientado a Pruebas para desarrollar la función dividir en el script ./js/calculator/calculator.js.
/*Escribir una prueba unitaria para verificar la función divide() pasando 0 como segundo argumento.
 Corregir la función divide() para que la prueba pase y maneje el caso de la división por 0. */
test('divide /0 as a second argument',()=>{
  expect(calculator.divide(2,0)).toBe("Indefinido");
})
/*2.Se corre el test-> falla 
3.Se reescribe el código -> en calculator.js para que muestre un caso donde b==0
4.Se vuelve a realizar la prueba -> se pasa correctamente ya que ahora ya se maneja la división entre 0 
5.Se refactoriza el código ->no tiene nada que refactoriza se concluye*/


