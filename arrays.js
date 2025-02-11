//Error de sesion de tipos de datos (aclaración)

let numero = 12;
let numero1 = "12"

//operadores igualdad != y de estricta igualdad !===
let comparación = numero !== numero1;

console.log(comparación); /*


/*Ciclos/bucles/loops
Son una estructura de código que nos permite ejecutar una instrucción de forma repetida, siempre y cuando cumpla la condicion. Son estructuras de control.

estos ciclos estan vinculados a variables y condiciones, es importante que nuestros ciclos sean finitos
*/
/*while se sigue ejecutando hasta que la condición sea falsa, primero se pregunta y luego se ejecuta */


let número = 0;

while (numero <= 5)
    console.log (numero);
     numero++
    
    
    /*
    while (numero < 16){
        document.write(numero);
        } ciclo infinito
         */

        //do while, primero ejecuta y despúes pregunta la condición

        do {
            console.log(numero);
            numero++
        }
        while (numero <= 5);

        //break nos permite detener el ciclo con base en lo que necesite

        while (numero < 100){
            console.log(numero);
            numero++
            if (numero == 10){
                break;
            }
        }

        /* Ciclo for
        Se compone de tres partes, una es declarando mi variable, inicializando e iterando */

        for (let i = 0; i< 6; i++){
            document.write(i);
        }

        //Investigar el ciclo for in y for of
        //For in nos permite iterar sobre objetos
        //For of nos permite iterar sobre arreglos

        //Arrays es una estructura de datos en este caso una lista, con datos que comparten caracteristicas

        let frutas =['papaya', 'platano', 'mango', 'fresa', 'tuna'];
       
        console.log(frutas);

        //metodo splice permite eliminar elementos específicos y/o modificar el array
        //frutas.splice/1, 0, 'uva');

        //metodo shift
        //Eminina el primer elemento
        //frutas. shift();

        //metodo pop
        //Elimina el ultimo elemento
        //frutas.pop();

        //metodo filter 
        //Nos permite filtrar elementos de un array y crear un nuevo arreglo con los elementos que cumplan con la condición
        //let frutasFiltradas = frutas.filter(Fruta => fruta.length > 5);

        let numeros = [1, 2, 3];
        numeros.splice(1, 0, 4);
        console.log(numeros);

        //*Objeto/ diccionario */

        const usuarixs = {
            "nombre" : "Diana",
            "edad" : "27",
            "correo" : "decvargas11@gmail.com",
            "telefono" : "5561195993"

        }

        console.log(usuarixs.edad);

        //*Funciones son bloques de código que nos permites modularizar y se pueden ejecutar en cualquier parte del código, siempre y cuando las mande llamar*/

        function consejo(){
            let clima = prompt("¿Cómo está el clima hoy'");
            if (clima == "caluroso"){
                alert ("toma agua");
            } else {
                alert("abrigate");
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
    ];

// TAREA
// Problema 1: Bucles
// Este bucle for se ejecutará una vez por cada elemento en el array WEEKDAYS.
// Error 1: console.log está dentro de comillas, lo que lo convierte en una cadena de texto en lugar de una instrucción válida.
// Error 2: element no es el valor del día de la semana, sino su índice (posición en el array)./*

for (let index in WEEKDAYS) {
    console.log("El bucle está en la posición " + index);
    console.log("El día en la posición " + index + " es " + WEEKDAYS[index]);
};

// Problema 2: Ramas (Branches)
// Este bloque de código verificará si cada elemento en el array WEEKENDS es sábado O domingo
// Error 1: element es un índice, no un valor del array.
// Error 2: weekend está declarado dentro del if, por lo que no existe fuera de ese bloque (ámbito de bloque let).
// Error 3: weekend siempre será undefined fuera del if /*


for (let index in WEEKDAYS) {
    let weekend = false;
    if (WEEKDAYS[index] === "Sábado" || WEEKDAYS[index] === "Domingo") {
        weekend = true;
    }
    if (weekend === true) {
        console.log(WEEKDAYS[index] + " es fin de semana!");
    }
};

// Problema 3: Funciones
//Esta función comprobará si un número de día de entrada corresponde a un día laborable
//Error 1: workday es una variable dentro de la función, pero se intenta imprimir fuera de ella.
//Error 2: "Saturday" y "Sunday" están en inglés, pero los días en WEEKDAYS están en español./*

function workdayChecker(dayNumber) {
    let workday = true;
    if (WEEKDAYS[dayNumber] === "Sábado" || WEEKDAYS[dayNumber] === "Domingo") {
        workday = false;
    }
    return workday;
};

// Llamar a la función
let isWorkday = workdayChecker(4);
console.log("¿Es día laboral?:", isWorkday);
