//Error de sesion de tipos de datos (aclaración)

/*let numero =12;
let numero1 = "12";

//operadores igualdad != y de estrica igualdad!==
let comparacion = numero !== numero1;
console.log(comparacion);

/*Ciclos/bucles/loops
Son una estructura de código que nos permiten ejecutar
una instrucción de forma repetida, siempre y cuando se
cumpla la condición, se detendrá cuando esta
ya no se cumpla.Son estructura de control.
Estos ciclos están vinculados a variables 
y condiciones, es importante que nuestros ciclos
sean finitos
*/
/*While: se sigue ejecutando hasta que la condición sea
falsa, primero pregunta y luego lo ejecuta */ 

let numero = 0;

while(numero <=5){
    console.log(numero);
    numero++;
}
/*
while(numero < 16){
    document.write(numero);
} ciclo infinito
*/ 

//do while primero ejecuta y después pregunta la condición
//por eso en el navegador se ve 6 

do {
    console.log(numero);
    numero++
}
while(numero <= 5);

//Break nos perite detener el ciclo con base en lo que
//necesite break es para terminar el ciclo

while(numero < 100){
    console.log(numero);
    numero++
    if(numero == 10){
        break;
    }
}

// let nombre declarar, = brenda inicializandola

/*Ciclo for 
Se compone de 3 partes, una es declarar mi variable, otra 
es inicializando e iterando siempre tiene
un condición (se utiliza la i por iterar) */

for (let i = 0; i < 6; i++){
    document.write(i);
}

//INVESTIGAR el ciclo for in y for of

/*Arrays es una estructura de datos en este caso una lista
con datos que se vinculan o que comparten caracteristicas
tiene indice que empieza desde 0,1,2,3,5 y la longitud o posición 
sería empieza desde 1 en este caso la longitud seria  5*/

let frutas =['papaya', 'platano', 'mango', 'fresa', 'tuna'];
frutas.splice(4);
console.log(frutas);

let numeros = [1,2,3];
numeros.splice(1,0,4);
console.log(numeros)


//Metodo splice: permite eliminar y/o modificar el array
//se puede convinar para indicarle con shift eliminas
// el primero y con pop el ultimo borra los elementos o agra
// y le indicas entre que elementos quieres agregar o borrar
//  frutas.splice(1, 0, 'uva'); 

//Metodo shift: Eliminar el primer elemento del array
//frutas.shift() 

//Metodo pop elimina el ultimo elemento
//frutas.pop()

//INVESTIGAR metodo filter 

//Objeto-diccionario clave:nombre valor:fernanda

const usuarias = {
    "nombre" : "Fernanda",
    "edad" : "32",
    "correo" : "fernanda@gmail.com",
    "telefono" : "5574980683",
}

console.log(usuarias.edad);

/*Funciones son bloques de codigo que nos permiten modularizar
y se pueden ejecutar en cualquier parte del codigo, siempre
y cuando las mandes a llamar*/

function consejo(){
    let clima = prompt("¿Cómo esta el clima hoy?");
    if(clima == "Caluroso"){
        alert("Toma agua");
    }else{
        alert("Abrigate");
    }
}
consejo();

//AQUI INICIA LA TAREA DE ARRAYS DE GOOGLE CHAT

// Un array de días de la semana

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
    console.log("El bucle está en la posición " + element);
    console.log("El día en la posición " + element + " es " + WEEKDAYS[element]);
    }
    // Error 1: ReferenceError: elemento no está definido -SOLUCIONADO-
    
    // Problema 2: Ramas (Branches)
    // Este bloque de código verificará si cada elemento en el array WEEKENDS es sábado O domingo

    for (let element in WEEKDAYS) {
        let weekend 
    if (element === "Sábado" || element === "Domingo") {
         weekend = true;
    }
    // Error 2: ReferenceError: weekend no está definido

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
    }
    let workday = workdayChecker(4);
    // Error 3: ReferenceError: workday no está definido
    console.log(workday)



    