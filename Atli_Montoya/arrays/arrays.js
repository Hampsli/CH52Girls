//error de sesión de tipos de datos

//let numero = 12;
//let numero1 = "12"

//operadores igualdad != y de estricta igualdad !===
//let comparacion = numero !== numero1;


//console.log(comparacion)

/*ciclos/bucles/loops
son una estrcutura de código que ejecut repetidamente un conjunto de instrucciones
siempre y cuando se cumpla la condición y se va a detene cuado ya no se cumpla
son estructuras de control

estos ciclos están vinculados a variables y condiciones, es importante
que los ciclos sean finitos */

/*while se sigue ejecutando hasta que la condición sea falsa, primero 
se pregunta y luego se ejecuta*/

let numero = 0;

while (numero <= 5){
    console.log(numero);
    numero++
}

/* 
while (numero < 16) {
    document.write (numero);
} ciclo infinito
*/

//do while: primero ejecuta y después ejecuta la condición

do { 
    console.log(numero);
    numero ++
}
while (numero <= 5);

//break nos permite detener el ciclo cn base en lo que necesite

while (numero < 100){
    console.log(numero);
    numero++
    if (numero == 10){
        break;
    }

}

/* ciclo for 
se compone de tres partes: na es declarando la variable
iniciando la variable e iterando */

for (let i = 0; i < 6; i++){
    document.write(i);
}
//Ivestigar el ciclo for in y for of


/*arrays es una estructura de datos, en este caso una llista con 
datos que se vinculan por características compartidas. Dentro
de un array los elementos empiezan desde 0 y una posición, que inicia en 1 */

let frutas = [ "papaya", "platano", "mango", "fresa", "tuna"];
frutas.pop();
console.log(frutas);

//metodo splice permite eliminar y/o modificar el array
//frutas.splice(1,0, "uva"); para agregar une lemento en el array entre dos valores

/* metodo shift elimina el primer elemento
frutas.shift();*/

/*metodo pop elimina el último elemento
frutas.pop(); */

//metodo filter *tarea

let numeros = [1, 2, 3];
numeros.splice(1, 0, 4);
console.log(numeros);

/* objeto/ diccionario */

const usuarixs = {
    "nombre" : "Fernanda",
    "edad" : "32",
    "correo" : "fernanda@gmail.com",
    "telefono" : "558937420"

}

console.log(usuarixs.edad);

/* funciones son bloques de código
que nos permiten modulizar y se pueden ejecutar en cualquier parte del código, siempre y cuando
las mande llamar*/

function consejo(){
    let clima = prompt("como está el clima hoy?");
    if (clima == "caluroso"){
        alert ("toma agua");
    } else {
        alert("abrígate");
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
    // Problema 1: Bucles
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
  
  // Problema 1: Bucles
  // Este bucle for se ejecutará una vez por cada elemento en el array WEEKDAYS.
  for (let element in WEEKDAYS) {
    console.log("El bucle está en la posición " + element);
    console.log("El día en la posición " + element + " es " + WEEKDAYS[element]);
  }
  
  // Problema 2: Ramas (Branches)
  // Este bloque de código verificará si cada elemento en el array WEEKENDS es sábado O domingo
  for (let element in WEEKDAYS) {
    let weekend = false; 
    if (WEEKDAYS[element] === "Sábado" || WEEKDAYS[element] === "Domingo") {
      weekend = true; // Cambia a true si es fin de semana
    }
  
    if (weekend === true) {
      console.log("It's a weekend!");
    }
  }
  
  // Problema 3: Funciones
  // Esta función comprobará si un número de día de entrada corresponde a un día laborable
  function workdayChecker(dayNumber) {
    let workday = true;
    if (WEEKDAYS[dayNumber] === "Sábado" || WEEKDAYS[dayNumber] === "Domingo") {
      workday = false; // Si es fin de semana, cambia a false
    }
    return workday;
  }
  
  // Llamamos la función y mostramos el resultado
  console.log(workdayChecker(4)); 
  