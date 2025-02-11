/*ARRAYS
Un array es una estructura de datos, en este caso, una lista, con valores que comparten características. Es un contenedor. Dentro de los Arrays, los elementos cuentan con un índice que empieza con 0 y una posición, que inicia en 1 
*/

/*OBJETO/DICCIONARIO
Un objeto es un diccionario de pares clave-valor.
 */

/*FUNCIONES
Las funciones son un conjunto de instrucciones que se agrupan para lograr un resultado específico. Las funciones pueden tomar entradas y estas entradas se llaman "Argumentos".
    1. Modular: Nos permite trabajar de forma específica sobre errores, modificaciones, etc.
    2. Reutilizable: Puede ser ejecutada en cualquier punto de nuestro código.
    3. Invocable: Podemos definir una función y luego invocarla más adelante en nuestro código.
*/

//ACTIVIDAD
//Un array de días de la semana
const WEEKDAYS = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo"
]

//Problema 1: Bucles

//Este bucle - for - se ejecutará una vez por cada elemento en el array WEEKDAYS.
for (let element in WEEKDAYS) {
    console.log("El bucle está en la posición " + element);
    console.log("El día en la posición " + element + " es " + WEEKDAYS[element]); //Corrección: incluir console.log dentro del for para que reoonozca la variable element
}

//Error 1: ReferenceError: element is not defined
//console.log("El día en la posición " + element + "es " + WEEKDAYS[element]);

//Problema 2: Ramas (Branches)

//Este bloque de código verificará si cada elemento en el array WEEKENDS es sábado o domingo
let weekend; //Corrección: definir la variable antes del for para evitar problemas de alcance
for (let element in WEEKDAYS) {
    //Corrección: comparar el valor con weekdays[element] ya que element es solo la posición en el array
    if (WEEKDAYS[element] === "Sábado" || WEEKDAYS[element] === "Domingo") {
        weekend = true;
    }
}

//Error 2: ReferenceError: weekend is not defined
if (weekend === true) {
    console.log("It's a weekend!");
}

//Problema 3: Funciones

//Esta función comprobará si un número de día de entrada corresponde a un día laborable
function workdayChecker(dayNumber) { 
    let workday = true;
    if(WEEKDAYS[dayNumber] === "Saturday" || WEEKDAYS[dayNumber] === "Sunday") {
        workday = false;
    }
    return workday;
}
let result = workdayChecker(4);

//Error 3: ReferenceError: workday is not defined
console.log("¿Is it a workday? " + result);