// Array contiene una lista de datos que tiene un indice

//Error de sesion de tipos de datos (aclaracion)

let numero0 = 12;
let numero1 = "12"

//operados igualdad != y de estricta igualdad !===

let comparacion = numero !== numero1;

console.log(comparacion);

/* estos ciclos estan vinculados a variables y 
condiciones, es importante que nuestros ciclos sean finitos*/

/*ciclo while se sigue ejecutando hasta que la 
condicion sea falsa, primero se pregunta y luego se ejecuta*/

let numero = 0;
while (numero <= 5){
    console.log(numero);
    numero++
}
/* while (numero > 16){
document.write(numero); */

// do while, primero ejecuta y despues pregunta la condicion

do{
    console.log(numero);
    numero++
}

while (numero <= 5);

//Break nos permite detener el ciclo con base en lo que necesite

while (numero < 100){
    console.log(numero);
    numero++
    if(numero ==10){
        break;
    }
}

/* Ciclo for
 se compone de tres partes, una es declarar una variable, inicializando e iterando */

for(let i =0;  i < 6; i++ ){
    document.write(i);

}

//investigar el ciclo for in y for of

/* For-in: declaración de JavaScript recorre las propiedades de un objeto 
solo muestra los numeros de los indices*/
for (let indice in juguetes) {
    console.log(indice);  // Muestra los números: 0, 1, 2
}

/*For-of: ejecuta un bloque de código para cada elemento de un objeto iterable, como lo son: String, Array 
muestra los datos de la cadena como en el ejemplo de abajo mostrara ["manzana", "plátano", "cereza"] */
const frut = ["manzana", "plátano", "cereza"];

for (let fruta of frut) {
  console.log(fruta); // Imprime los valores: manzana, plátano, cereza
}

//un objeto es un diccionario de partes clave - valor y  el array es una lista

// Arrays es una estructura de datos en este caso una lista, con datos que comparten caracteristicas.
//Dentro de un array los elementos cuentn con un indice que empieza de 0 y una posicion , que inicia en 1

let frutas = [ `Papaya`, `platano`, `mango`, `fresa`,`tuna`];
frutas.pop(2,3);
console.log(frutas);

//metodo splice eliminar elementos especificos y/o modificar el array
//frutas.splice(1,0, `uva`)

//metodo shift
//elimina el primer elemento
//frutas.shift();

//metodo poop
//elimina el ultimo elementos
//frutas.pop();

//metodo filter investigar
/* El método filter() crea una nueva matriz llena de elementos 
que pasan una prueba proporcionada por una función. 
El método filter() no ejecuta la función para elementos vacíos. 
El método filter() no cambia la matriz original.*/

//Ejemplo 



let numeros = [1,2,3];
numeros.splice(1,0,4); 
/* 1 representa el numero de indice donde comienza la modificacion
 0 es el numero de elementos a eliminar a partir del indice dado 
 4 es el elemento a agregar en el indice especificado */

console.log(numeros);

/* objetos/dicicionario */
const usuarixs = {
    "nombre" : "Fernanda",
    "edad" : "32",
    " correo" :"fernanda@gmail.com",
    "telefono" : "5574980683"
}
console.log(usuarixs.edad);

//El objeto tiene que ser valores especificos

/*Funciones son bloques de código
que nos permiten modularizar y se
pueden ejecutar en cualquier parte
del código, siempre y cuando las
mande 1lamar*/

function consejo(){
    let clima=prompt("Como esta el clima hoy?");
    if (clima == "Caluroso"){
        alert("toma agua");
    } else {
        alert("Abrigate");
    }
}
consejo();

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
// Falta ;

// Problema 1: Bucles
// Este bucle for se ejecutará una vez por cada elemento en el array WEEKDAYS.
for (let element in WEEKDAYS) {
    //Cambiar el for-in por for-of ya que este es para arrays 
    "console.log("El bucle está en la posición" + element

    //Las comillas en console.log como si fuera string
    //no se encerro el parentesis 
    // no se cerro con ;
}

// Error 1: ReferenceError: elemento no está definido
console.log("El día en la posición " + element + " es " + WEEKDAYS[element])
// Problema 2: Ramas (Branches)
// Este bloque de código verificará si cada elemento en el array WEEKENDS es sábado O domingo
for (let element in WEEKDAYS) {
    //Cambiar el for-in por for-of ya que este es para arrays 
    // Falta inicializar weekend fuera de if

    if (element === "Sábado" || element === "Domingo") {
        let weekend = true
    }
    "// Error 2: ReferenceError: weekend no está definido"

    if (weekend === true) {
        console.log("It's a weekend!")
    }
}
// Problema 3: Funciones
// Esta función comprobará si un número de día de entrada corresponde a un día laborable
function workdayChecker(dayNumber) {
    let workday = true
    if (WEEKDAYS[dayNumber] === "Saturday" || WEEKDAYS[dayNumber] === "Sunday") {
        workday = false
    }
    return workday
    // Falta cerar con ;
}
workdayChecker(4)
// Error 3: ReferenceError: workday no está definido
console.log(workday)
// 
// no se termino con ; el comando console.log
