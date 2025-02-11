/*Ciclos/bucles/loops
Son una estrauctura de código que nos permiten ejecutar 
una instrucción de forma repetida, siempre y cuando se cumpla
la  condición. Son estructuras de control.

Estos ciclos están vinculados a variables y condiciones, es importante que
nuestros ciclos sean finitos.
*/

/*While se sigue ejecutando hasta que la comdición sea falsa,
primero se pregunta y luego se ejecuta*/

let numero = 0;

while (numero <= 5) {
    console.log(numero);
    numero++
}

/* EJEMPLO DE CICLO INFINITO
while (numero < 16){
    document.write(numero);
    ciclo infitnito
*/

do {
    console.log(numero);
    numero ++  //operador que incrementa al resultado un número mas
}
while (numero <=5);

//BREAK**************
/*Nos permite detener el ciclo con base
en lo que se necesite*/

while(numero < 100){
    console.log(numero);
    numero++
    if (numero == 10){
        break;
    }
}

/*Ciclo for
se compone de tres partes*, una es
declarando mi variable,
inicializando e iterando*/

/*(declarar varible, iniciaizar varible, iterando)*/
/* i=0 es declara varible e inicializarla, el ciclo 
for necesita una condición y con el contador i++ vamos iterando*/

for (let i=0; i<6; i++){
    document.write(i);
}

//Investigar el ciclo for in y for of

/* Arrays es una estructura de datos, en este caso
una lista, con datos que comparten características*/

let frutas = [`papaya`, `platano`, 
    `mango`, `fresa`, `tuna`];
  
    console.log(frutas); 
    
//metodo splice permite eliminar elementos 
// especificos y/o modificar el array
// frutas.splice(1,0, `uva`);

//metodo shift
//Elimina el primer elemento
//frutas.shift();

//metodo pop
//elimina el ultimo elemento
//frutas.pop();

//metodo filter *tarea

let numeros = [1,2,2];
numeros.splice(0,1,4);
console.log(numeros);

/*Objeto/ diccoonario */

const usuarixs = {
    "nombre" : "Fernanda",
    "edad" : "32",
    "correo" : "fernanda@gmail.com",
    "telefono" : "5589963221"
}

console.log(usuarixs.edad);

/*Funciones son bloques de código que nos permiten
modularizar y se pueden ejecutar en cualquier parte
del código, siempre y cuando las mande a llamar*/

function consejo(){
    let clima = promt("Como esta el clima hoy?");
    if (clima == "Caluroso"){
        alert("toma agua");
    } else {
        alert("Abrigate");
    }
}

consejo();
consejo();
consejo();
consejo();

/******************* TAREA************************** */

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
        console.log(`El bucle está en la posición ${element}`); //****utilizamos los ``=backticks 
                                                                  // para llamar a la variable element-índices **//
    }
    // Error 1: ReferenceError: elemento no está definido
    for (let element in WEEKDAYS) {
        console.log(`El día en la posición ${element} es ${WEEKDAYS[element]}`); //****utilizamos los ``=backticks
                                                    //para llamar a las variable element-índices y valores de la lista*//
    }

    // Problema 2: Ramas (Branches)
    // Este bloque de código verificará si cada elemento en el array WEEKENDS es sábado O domingo
    
let weekend = false; //******************definimos variable

for (let element of WEEKDAYS) {
    if (element === "Sábado" || element === "Domingo") {
        weekend = true;
    }

    // Error 2: ReferenceError: weekend no está definido"
    if (weekend === true) {
        console.log("It's a weekend!");
    }
}  
    // Problema 3: Funciones
    // Esta función comprobará si un número de día de entrada corresponde a un día laborable

let workday = true; //**********************definimos variable
function workdayChecker(dayNumber) {
    if (WEEKDAYS[dayNumber] === "Sábado" || WEEKDAYS[dayNumber] === "Domingo") {
        workday = false //******************* */ quitamos el let
    }
        return workday
}
workdayChecker(4) 
// Error 3: ReferenceError: workday no está definido
console.log(workday)










