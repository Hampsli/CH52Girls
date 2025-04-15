
/* Ciclos /Bulcles/loops 
son una estructura de codigo que nos permiten ejecutar una instruccion de forma repetida,
siempre y cuando cumpla la condicion. Son structuras de control

estos ciclos estan vinculados a variables y condiciones, es importante que nuestros ciclos sean finitos
*/

/* while se sigue ejecutando hasta que la condicion sea falsa,
primero se pregunta y luego se ejecuta*/ 
let numero = 0;

while (numero <= 5){
    console.log(numero);
    numero++ //esto es para que incremente un numero 
}

/*
while (numero > 16){
    document.write(numero);
} ciclo infinito 
*/

// do while, primero ejecuta y despues pregunta la condicion

do {
    console.log(numero);
    numero++
}
while (numero <= 5);

// break nos permite detener el ciclo con base en lo que necesite

while(numero < 100){
    console.log(numero);
    numero++
    if (numero == 10){ // se detendra en el 10 
        break;
    }
        
}

/* Ciclo for
se compone de tres partes: 
1.- donde declaramos mi variable 
2,. inicializando
3.- iterando 
*/

for (let i = 0; i < 6; i++){
    document.write(i);
}


/*------------------------------------------TAREA------------------------------------------------------------------------ */
// investigar el ciclo for in y for of 

/*El ciclo for in se utiliza para iterar sobre propiedades de un objeto
Recorre todas las propiedades del objeto en un orden arbitrario, 
permitiendo realizar operaciones en cada una de ellas */

var diaMes ={
    enero:31,
    febrero: 28,
    marzo:31
}

for (var mes in diaMes){
    console.log(mes); // va a entrar en la variable y nos va a mandar los meses guardados en diaMes
}                     // es como decirle - de mis dias del mes solo dame el mes

/*Ciclo for of  es una estructura diseñada para iterar sobre tipos de datos considerados iterables, 
como Arrays, Objects y Sets. Este tipo de ciclo facilita la obtención directa de los valores almacenados en la estructura iterable, 
en lugar de trabajar con índices o claves.*/

let iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
} //simplifica la iteración y mejora la legibilidad del código al eliminar la necesidad de gestionar índices.

//El metodo filter crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length < 6); // va a filtrar las palabras con menos de 6 letras

console.log(result);


/*-----------------------------------------------FIN DE TAREA--------------------------------------------------------------------------------- */

// Arrays es una estructura de datos, en este caso una lista con datos que comparten caracteristicas
// Dentro de un array los elementos cuentan con un indice que empieza en 0 y una posicion, que inicia en 1

let frutas = [`papaya`, `platano`,`mango`,`fresa`,`tuna`];

frutas.pop(); // esto agregara la uva a nuestra lista 

console.log(frutas);

//metodo splice permite eliminar elementos especificos y/o modificar el array
//frutas.splice(1 , 0, `uva`); // esto agregara la uva a nuestra lista 

// medodo shift 
//elimina el primer elemento
//frutas.shift();

// metodo pop
// elimina el ultimo elemento
//frutas.pop();


/*objetos / diccionario */

const usuarios = {
    "nombre": "Denisse",
    "edad":  "22",
    "correo" : "denissehernandez2002@gmail.com",
    "telefono" : "3318483237"
} // fin de const

console.log(usuarios);

/*Funciones son losbloques de codigo que nos permiten modularizar y se puedes
ejecutar en cualquier parte del codigo, siempre y cuando las mande llamar */

function consejo(){
    let clima = prompt("Como esta el clima hoy?");
    if (clima == "Caluroso"){
        alert ("Toma agua ");
    } else{
        alert ("Pote un sueter");
    }
}// fin de function

consejo();

 /*-------------------------------------------TAREA SCRIPT----------------------------------------------------------*/
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
   /* codigo mal 
   "console.log("El bucle está en la posición " + element)
    Codigo bien: */
     console.log("El bucle está en la posición " + element)
     console.log("El día en la posición " + element + " es " + WEEKDAYS[element])
    }
    // Error 1: ReferenceError: elemento no está definido
    
    //console.log("El día en la posición " + element + " es " + WEEKDAYS[element]) // este no lo va a imprimir porque esta fuera del for in


    // Problema 2: Ramas (Branches)
    // Este bloque de código verificará si cada elemento en el array WEEKENDS es sábado O domingo
    
    let weekend; //se declara weekend
    for (let element in WEEKDAYS) {

    if (WEEKDAYS[element] === "Sábado" ||WEEKDAYS[element] === "Domingo") {
     weekend = true;
    
    }
    "// Error 2: ReferenceError: weekend no está definido"
    
    if (weekend === true) {
    console.log("It's a weekend!");
    }
    }
    // Problema 3: Funciones
    // Esta función comprobará si un número de día de entrada corresponde a un día laborable
    let workday; // defini worday 
    function workdayChecker(dayNumber) {
     workday = true; // le quite el let de aqui
    if (WEEKDAYS[dayNumber] === "Saturday" || WEEKDAYS[dayNumber] === "Sunday") {
    workday = false;
    };
    
    return workday
    }
    workdayChecker(4);
    // Error 3: ReferenceError: workday no está definido
    console.log(workday);