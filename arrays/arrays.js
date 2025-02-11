//Erro de sesión de tipos de datos (aclaración)
/*let numero = 12;
let numero1 = "12";

//operadores igualdad != y de estricta igualdad !===
let comparacion = numero !== numero1;

console.log(comparacion);*/

/*  Ciclos / bucles / loops
Son una estructura de código que nos permiiten ejecutar una instrucción de forma 
repetida, siempre y cuando cumpla la condición. Son estructuras de control.

Estos ciclos estan vinculados a variables y condiciones, es importante que nuestros
ciclos sean finitos*/

/*While se sigue ejeccutando hasta que la condicion sea falsa,
primero se pregunta y luego se ejecuta */


let numero = 0;

while (numero <= 5){
    console.log(numero);
    numero++
}

/*
while (numero < 16){
    document.write(numero);
    }ciclo infinito
*/

//do while, primero ejecuta y 
// despues pregunta la condición

do{
    console.log(numero);
    numero++;

} while (numero <= 5);

//break nos permite detener el ciclo
//con base en lo que necesite

while(numero < 100){
    console.log(numero);
    numero++;
    if (numero == 10){
        break;
    }
}

/* Ciclo for
Se compone de tres partes 
1.- declarar e inicializar variable
2.- condición
3.- iterar
*/

for (let i = 0; i < 6; i++){
    document.write(i);
}

//Investigar el ciclo for in y for of

/* un array es una estructura de datos en
este caso es una lista, con datos que comparten
características (es un contenedor) dentro de un array 
los elementos cuentan con un indice que empieza de 0 y 
una posición que inicia en 1.


un objeto es un diccionario*/

let frutas = ['papaya','platano','mango','fresa','tuna'];
frutas.splice(1,0,'uva');
console.log(frutas);

//metodo splice permite eliminar elementos especificos 
// y/o modificar el array
//frutas.splice(1,0,'uva');

//metodo shift
//Elimina el primer elemento
//frutas.shift();

//metodo pop
//elimina el ultimo elemento
//frutas.pop();

//metodo filter *tarea

let numeros = [1, 2, 3];
numeros.splice(1, 0, 4);
console.log(numeros);

/* Objeto diccionario*/

const usuarixs = {
    "nombre" : "Itzel",
    "edad" : "24",
    "correo" : "itzel@gmail.com",
    "telefono" : "3314709671"
}

console.log(usuarixs.edad);

/*Funciones son bloques de código que nos permiten 
modularizar y se pueden ejecutar en cualquier parte
del código, siempre y cuando las mande llamar*/
/*
function consejo(){
    let clima = prompt("Como esta el clima hoy?");
    if (clima == "Caluroso"){
        alert ("Toma agua");
    } else{
        alert("Abrigate");
    }
}

consejo();
*/

// Un array de días de la semana
const WEEKDAYS = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo"
    ]
    element = 0;
    // Problema 1: Bucles
    // Este bucle for se ejecutará una vez por cada elemento en el array WEEKDAYS.
    for (let element in WEEKDAYS) {
    console.log("El bucle está en la posición " + element)//al inicio de la línea tenía una comilla extra
    }
    // Error 1: ReferenceError: elemento no está definido
    console.log("El día en la posición " + element + " es " + WEEKDAYS[element])
    // Problema 2: Ramas (Branches)
    // Este bloque de código verificará si cada elemento en el array WEEKENDS es sábado O domingo
    for (let element of WEEKDAYS) {
  
    if (element === "Sábado" || element === "Domingo") {
    console.log("It's a weekend!")
    }
    }
    // Problema 3: Funciones
    // Esta función comprobará si un número de día de entrada corresponde a un día laborable
    function workdayChecker(dayNumber) {
    let workday = true;
    if (WEEKDAYS[dayNumber] === "Saturday" || WEEKDAYS[dayNumber] === "Sunday") {
    workday = false;
    }
    
    return workday;
    }
    let workday = workdayChecker(4)
    // Error 3: ReferenceError: workday no está definido
    console.log(workday)