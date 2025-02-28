/* ciclos / bucles /loops
Son una estructura de codigo que nos permiten ejecutar una instruccion de forma repetida
siempre y cuando se cumpla la condicion, se va a detener cuando ya no se cumpla
Son estructuras de control
Estos ciclos estan viculados a variables y condiciones, es importante que nuestros ciclos
sean finitos*/
//console.log es como print
/*while: se sigue ejecutando hasta que la condicion sea falsa, primero se pregunta y luego se ejecuta*/

let numero = 0;

while (numero <=5) {
    console.log(numero);
    numero++
}

/* while (numero <16) {
    document.whrite (numero);
} ciclo infinito*/

//do while: primero ejecuta y despues pregunta la condicion

do {
    console.log (numero);
    numero++
}
while (numero <=5);

//Break: nos permite detener el ciclo con base en lo que necesite

while (numero < 100) {
    console.log (numero);
    numero ++
    if (numero == 10){
        break;
    }
}

/* ciclo for: se compone de tres partes:
Declarando mi variable, inicializando e iterando */

for (let i = 0; i < 6; i++){
    document.write(i);
}

/*Arrays es una estructura de datos, en este caso es una lista de valores
con datos que comparten caracteristicas*/
//Dentro de un array los elementos cuentan con un indice que empieza de 0 y una poscion que inicia en 1

let frutas = ["papaya", "platano", "mango", "fresa", "tuna"];
frutas.splice(1, 0, `uva`);
console.log(frutas);

//metodo splice: permite eliminar y/o modificar (agregar) el array
//frutas.splice(1, 0, `uva`);

//metodo shift: elimina el primer elemento
/* let frutas = ["papaya", "platano", "mango", "fresa", "tuna"];
frutas.shift();
console.log(frutas);*/

//metodo pop: elimina el ultimo elemento
/* let frutas = ["papaya", "platano", "mango", "fresa", "tuna"];
frutas.pop();
console.log(frutas);*/

/* metodo filter */

let numeros = [1, 2, 3];
numeros.splice(1, 0, 4);
console.log(numeros);

//objeto: diccionario 
// por lo general se usa la variable const
const usuaries ={
    "nombre" : "Andrea",
    "edad" : "26",
    "correo" : "anea@example.com",
    "telefono" : "3646831644"
}
console.log (usuaries.edad);

/* Funciones son bloques de codigo que nos permiten modularizar y se
pueden ejecutar en cualquier parte del codigo, siempre y cuando las mande llamar*/

function consejo (){
    let clima = prompt ("como esta el clima hoy?");
    if (clima == "caluroso") {
        alert ("toma agua");
    } else {
        alert ("abrigate");
    }
}

consejo();
consejo();
consejo();
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
    // Problema 1: Bucles
    // Este bucle for se ejecutará una vez por cada elemento en el array WEEKDAYS.
    for (let element in WEEKDAYS) {
    "console.log("El bucle está en la posición " + element) 
    }
//EN LA LINEA 113 MARCA ERROR POR LAS COMILLAS DEL INICIO YA QUE NO TIENEN NINGUNA FUNCION ESTANDO EN ESE LUGAR

    // Error 1: ReferenceError: elemento no está definido
    console.log("El día en la posición " + element + " es " + WEEKDAYS[element])
    // Problema 2: Ramas (Branches)
    // Este bloque de código verificará si cada elemento en el array WEEKENDS es sábado O domingo
    for (let element in WEEKDAYS) {
    if (element === "Sábado" || element === "Domingo") {
    let weekend = true
    }
    "// Error 2: ReferenceError: weekend no está definido"
//EN LA LINEA 125 MARCA ERROR POR LAS COMILLAS YA QUE HACEN QUE NO SE MARQUE COMO COMENTARIO Y AFECTA EN LA FUNCION

    if (weekend === true) {
    console.log("It's a weekend!")
    }
    }
//DOBLE CORCHETE 

    // Problema 3: Funciones
    // Esta función comprobará si un número de día de entrada corresponde a un día laborable
    function workdayChecker(dayNumber) {
    let workday = true
    if (WEEKDAYS[dayNumber] === "Saturday" || WEEKDAYS[dayNumber] === "Sunday") {
    workday = false
    }
    return workday
}
workdayChecker(4)
// Error 3: ReferenceError: workday no está definido
console.log(workday)