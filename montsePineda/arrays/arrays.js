/* Error sesión de tipos de datos (aclaración)

let numero=12;
let numero1="12"

//Operadores de igualdad != y de escricta igualdad !==
let comparacion = numero != numero1

console.log(comparacion); */


/* Ciclos/bucles/loops
Son una estructura de código que nos pemiten ejecutar una instrucción de forma repetida,
siempre y cuando cumpla la condición. Son estructuras de control.

Estos ciclos están vinculados a variables y condiciones, es importante que los ciclos sean finitos
*/

/* while
Se sigue ejecutando hasta que la condición sea falsa 
y se tiene que modificar la variable que se ocupa en la condición para que cambier y el while no sea infinito */

let numero = 0;

while (numero <= 5){
    console.log(numero);
    numero++
}


/* do while
Primero ejecuta y después pregunta la condición */
do {
    console.log(numero)
    numero++
} while (numero<=5); //Aquí imprimirá 0123456 porque se ejecuta primero y luego verifica y el contador ya había aumentado

/* for 
Se compone de 3 partes
Se declara la variable -> let index}
inicializando 
iterando
*/

for (let i = 0; i < 6; i++) {
    document.write(i);
    
}

while (numero < 100) {
    console.log(numero)
    numero++
    if(numero==10){
        break;
    }
}

//Investigar el ciclo forin y forof

/* for in
Se utiliza para iterar sobre las propiedades enumerables de un objeto o las índices de un arreglo

for (let key in objeto) {
  // Código a ejecutar
}
  key: Representa el nombre de la propiedad (en objetos) o el índice (en arreglos).
*/

let directorio = {nombre:"Montse", edad:"24", ciudad:"Edo. de México"}
for(let key in directorio){
    console.log(`${key}: ${directorio[key]}`);
}


/* for of
Se utiliza para iterar directamente sobre los valores de objetos iterables como arreglos, cadenas, mapas, conjuntos, etc.
for (let valor of iterable) {
  // Código a ejecutar
} 
  valor: Representa cada elemento del iterable (no el índice).
*/
let colores = ["rojo","amarillo","verde","rosa"];
for (let color of colores) {
    console.log(color);
}
//iterar sobre una cadena
let texto ="hola";
for(let letra of texto) {
    console.log(letra);
}
/* imprime
h
o
l
a */


/*Arrays
Es una estructura de datos en este caso una lista, con datos que comparten  características*/
let frutas=[`papays`,`platano`,`mango`,`fresa`,`tuna`]
console.log(frutas);

//Se puede interactuar con el array por medio de metodos 

//agregar al array, el metodo splice permite modificar el array, 
//Permite eliminar elementos espeficisos 
frutas.splice(1,0,`uva`)
console.log(frutas);
frutas.splice(1,2);
console.log(frutas);
//metodo shift, elimina el primer elemento 
frutas.shift();
console.log(frutas)

//metodo pop elimina el ultimo elemento de array
frutas.pop();
console.log(frutas);

//metodo filter *tarea

/*Objetos/diccionarios */

const usuarixs = {
    "nombre":"Fernanda",
    "edad":"32",
    "telefono":"5573304865",
    "email":"correo@gmail.com"
 }

console.log(usuarixs.edad);

/*Funciones 
Todos tiene  ciertas estrucuras y se permite trabajar por secciones*/
function name(params) {
    
}

//Reutilizar funciones 
/* Una funcione puede ser ejecctada den en cualuqier punto de nuestro código
Podemos definir una función, y luego invocarla ,más adelante en nuestro código */

function consejo() {
    let clima = prompt("¿Cómo está el clima hoy");
    if(clima == "Caluroso"){
        alert("Toma agua");
    }else{
        alert("Abriagate");
    }
}

consejo();
consejo();


// 

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
// Error 1: ReferenceError: elemento no está definido 
console.log("El día en la posición " + element + " es " + WEEKDAYS[element]) 
 
/*ERROR
console.log tiene " al inicio
element no está inicializado*/

// Problema 2: Ramas (Branches) 
// Este bloque de código verificará si cada elemento en el array WEEKENDS es sábado O domingo 
for (let element in WEEKDAYS) { 
 
    if (element === "Sábado" || element === "Domingo") { 
    let weekend = true 
  } 
 
"// Error 2: ReferenceError: weekend no está definido" 
 
 
  if (weekend === true) { 
    console.log("It's a weekend!") 
  } 
} 
/*ERROR
element no está inicializado*/ 


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

/*ERROR
workday no esta definido, no se imprime y está mal escrito el if 
     if (WEEKDAYS[dayNumber] === "Saturday" || WEEKDAYS[dayNumber] === "Sunday") { 
    workday = false 
    }else{workday=true}
*/ 
