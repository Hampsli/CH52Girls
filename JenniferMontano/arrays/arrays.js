// Error de sesión de tipos de datos (aclaración)

/*let numero = 12;
let numer1 = "12";*/
// while se sigue ejecutando hasta que la condición sea falsa, primero se pregunta y luego se ejecuta

/*let numero = 0;
while (numero <= 5) {
  console.log(numero);
  numero++;
}*/

/*
while (numero < 16){
    document.write(numero);
} ciclo infinito 
*/
//do while, primero ejecuta y despúes pregunta la condición
/*do {
  console.log(numero);
  numero++;
} while (numero <= 5);
//break nos permite detener el ciclo con base en lo que necesite
while (numero < 100) {
  console.log(numero);
  numero++;
  if (numero == 10) {
    break;
  }
} */
/* Ciclo for 
Se compone de tres partes, una es declarando mi variable, inicializando e iterando */

/* for (let i = 0; i < 6; i++) {
  document.write(i);
} */

//Ivestigar el ciclo for in y for of

// método splice frutas.splice(1,0, 'uva') <- agrega uva entre la posición 0 y 1
// método shift frutas.shift() <- solo borra el primer elemento de la lista
// método pop frutas.pop() <- solo borra el ultimo elemento de la lista

/*let frutas = ["papaya", "platano", "mango", "fresa", "tuna"];

console.log(frutas);*/

// Objeto - diccionario

/*const usuarixs = {
  nombre: "fernanda",
  edad: "32",
  correo: "ferndand@gmail.com",
  telefono: "5501234567",
};

console.log(usuarixs.correo);*/

// Funciones son bloques de código que nos permiten modularizar y se pueden ejecutar en cualquier parte del código. Siempre y cuando las mande a llamar.

/*function consejo() {
  let clima = prompt("¿Cómo está el clima hoy?");
  if (clima == "Caluroso") {
    alert("Toma awita");
  } else if (clima == "Frio") {
    alert("Ponte un suetercito");
  }
}

consejo();


------------------------------------ tarea
------------------------------------*/

// Un array de días de la semana
const WEEKDAYS = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

// Problema 1: Bucles
// Este bucle for se ejecutará una vez por cada elemento en el array WEEKDAYS.
/* for (let element in WEEKDAYS) {
"console.log("El bucle está en la posición " + element)
} */
// Corregido...
let ultiElement;
for (let element in WEEKDAYS) {
  console.log("El bucle está en la posición " + element);
  ultiElement = element;
}
console.log(
  "El día en la posición " + ultiElement + " es " + WEEKDAYS[ultiElement]
);

// Error 1: ReferenceError: elemento no está definido
/*console.log("El día en la posición " + element + " es " + WEEKDAYS[element])
);
*/

// La variable element fue declarada dentro del for, por lo que su alcance (scope) es local al bucle.
// Cuando intentamos acceder a element fuera del bucle, ya no existe.

// Problema 2: Ramas (Branches)
// Este bloque de código verificará si cada elemento en el array WEEKENDS es sábado O domingo
let weekend; //Hay que declarar a weekend fuera del bucle

for (let element of WEEKDAYS) {
  // for.... of recorre valores como "Lunes", "Martes"
  if (element === "Sábado" || element === "Domingo") {
    weekend = true;
  }
}
if (weekend === true) {
  console.log("It's a weekend!");
}
//

// Error 2: ReferenceError: weekend no está definido

/* if (weekend === true) {
    console.log("It's a weekend!");
  }
}*/

// Problema 3: Funciones
// Esta función comprobará si un número de día de entrada corresponde a un día laborable

function workdayChecker(dayNumber) {
  let workday = true;
  if (WEEKDAYS[dayNumber] === "Sábado" || WEEKDAYS[dayNumber] === "Domingo") {
    // hay que comparar en español
    workday = false;
  }
  return workday;
}
console.log(workdayChecker(5)); //mejor se imprimió la función que ha sido modificada

// Error 3: ReferenceError: workday no está definido
// console.log(workday);
