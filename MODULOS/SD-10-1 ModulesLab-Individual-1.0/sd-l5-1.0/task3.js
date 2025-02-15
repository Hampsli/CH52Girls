/* : A Javiera le gustaría una forma de calcular una edad a partir de una fecha de nacimiento determinada.
Exporte una función que requerirá 3 argumentos - un año, un mes y un día, y luego devuelva una edad precisa.
Por ejemplo, ageCalculator(2000, 12, 25) debe devolver la edad de alguien nacido el día de Navidad de 2000.

*/

export function ageCalculator(year, mes, dia) {

    const edad = 2025 -year; 

    return edad;


}

console.log(ageCalculator (2001, 12, 25));
console.log("Successful");
