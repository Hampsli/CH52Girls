// Error de sesion de datos (aclaración)
//let numero=12
//let numero1="12"

// operadoeres igualdad 
//let comparacion= numero !== numero1;

//console.log(comparacion); 

/*Ciclos/bucles/loops 
Son una estructura de codigo que nos permiten ejecutar
una instrucción de forma repitida, siempre y cuando 
cumpla con la condición. 
Son estructuras de control. 
Estos ciclos estan vinculados a variables y condiciones 
es importante que nuestrs ciclos sean finitos. 
*/

/*WHILE se sigue ejecutando hasta que la condición sea falsa
primero se pregunta y luego se ejecuta*/

let numero=0; 
while(numero <= 5){
    console.log(numero);
    numero++
}

/* EJEMPLO DE UN BUCLE INFINITO 
whlile (numero > 16){
    document.write(numero);   
}
*/

/* DO WHILE, primero ejecuta y despues pregunta
la condicion */

do {
    console.log(numero); 
    numero++
}
while (numero <= 5); 

/* BREAK, no permite detener el ciclo con base
en lo que necesite */
while(numero<100){
    console.log(numero);
    numero++
    if (numero == 10){
        break; 
    }
}

/* CICLO FOR
Se compone de tres partes, una es
declarando mi variable, inicializando e iterando */
for(let i=0; i<6; i++){
    document.write(i); 
}

//CICLO FOR IN
let datos={
    nom:"Erika",
    eda: 24,
    cuidad: "México"
}
for (let eda in datos){
    console.log(eda+":"+datos[eda])
}
// CICLO FOR OF 
let palabra="AMOR"
for (let letra of palabra){
    console.log(letra);
}

/* METODO FILTER, crea un nuevo array con todos los elementos que cumplen la condición implementada por la función dada.crea un nuevo array con 
todos los elementos que cumplen la condición implementada por la función dada. */
const palabras = ['Michi', 'Perrito', 'Periquito', 'cuyo', 'tortuga'];

const resultado = palabras.filter((palabras) => palabras.length > 6);

console.log(resultado);



//ARRAYS, es una estructura de datos, una lista con 
//datos que comparten caracteristicas (en un contenedor)
//Dentro de un Array los elementos cuentan con un indice que empieza de 0 
// y una posición que inicia en 1 
let frutas= ['papaya', 'platano', 'mango','fresa', 'tuna' ]; 
frutas.splice(1,0, 'uva');  // es para modificar un elemento al array, especificando la posición. Tambien permita eliminar  
frutas.splice(2,3)//en este splice elimina lo que este en ese lugar 
//frutas.shift();// shift elimina el primer elemento del array 
//frutas.pop(); //pop elimina el ultimo elemento

console.log(frutas); 

/* OBJETO/DICCIONARIO, estos objetos comparten caracteristicas especificas */
const usuarios={
    "nombre": "Erika",
    "edad":"24",
    "correo":"esme.cruz04@hotmail,com",
    "telefono": "5561508531"
}
console.log(usuarios.edad);

/*A diferencia del Array, los objetos no permiten acceder información y acceder a ella de forma 
más especifica */

/*FUNCIONES, son bloques de código que nos permiten medular y se pueden 
ejecutar en cualquier parte del codigo, siempre y cuando la mande a llamar
 */

function consejo(){
    let clima = prompt ("Cómo esta el clima hoy?");
    if (clima == "Caluroso"){
        alert("toma agüita"); 
    } else {
        alert("Abrigate");
    }
}
consejo()

/////////////////////////////////   LABORATORIO SCRIPT  ///////////////////////////////////////////
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
        console.log("El bucle está en la posición " + element) 
        console.log("El día en la posición " + element + " es " + WEEKDAYS[element])
    } // "console.log("El bucle está en la posición " + element)//Hay comillas en console 
    // Error 1: ReferenceError: elemento no está definido
    //console.log("El día en la posición " + element + " es " + WEEKDAYS[element]) //element no esta definido y no tiene ningun valor fuera del FOR
    
    // Problema 2: Ramas (Branches)
    // Este bloque de código verificará si cada elemento en el array WEEKENDS es sábado O domingo
    for (let element in WEEKDAYS) {
    if (element === "Sábado" || element === "Domingo") {
    //let weekend = true //weekend no esta definida 
    }
    // Error 2: ReferenceError: weekend no está definido" // hay comillas en ese comentario
    //if (weekend === true) {
    //console.log("It's a weekend!")
    //}
    }

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
console.log(workdayChecker)