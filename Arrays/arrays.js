/* Ciclos/bucles/loops
Son una estructura de código que nos permite repetir una acción más de una vez
Los ciclos son una estructura de código que nos permiten ejecutar una instrucción de forma repetida,
siempre y cuando la condición se cumpla.

estos ciclos estan vinculados a variables y condiciones, es importante que nuestros cilcos sean finitos.
*/


/* while 
    se ejecuta hasta que la condición sea falsa
    */ 
let numero = 0;

while (numero < 16){
    console.log(numero);
    numero++
}

//do while primero ejecuta y luego pregunta la condición
do{
    console.log(numero);
    numero++
}
while (numero <= 5);

/*break
Nos permite detener el ciclo 
*/
while (numero<100){
    console.log(numero);
    numero++
    if(numero==10){
        break
    }
}

/*Ciclo for 
Se compone de tres partes 
1) declaro mi variable
2) inicializo 
3) iterando
*/

//for (let i = 0; i < 6; i++){
//    document.write(i);
//}

//Investigar el ciclo for in y for of

//Arrays es una lista de datos , con datos que se vinculan 
let frutas=['papaya','platano','mando','fresa'];
console.log(frutas);
frutas.splice(1,0,'uva');//permite borrar o modificar el array
//frutas.splice(2,4); //borra los elementos entre el  2 y el 4
console.log(frutas)
//frutas.shift();//elimina el primer elemento
//frutas.pop();//elimina el último elemento

//Objeto /diccionario
const usuarixs={
    "nombre" : "Fernanda",
    "edad" : "32",
    "correo" : "fernanda@gmail.com",
    "teléfono" : "5574980683"
}
console.log(usuarixs.edad);

/*Funciones son bloques de código que nos permiten modularizar
y se pueden ejecutar en cualquier parte del código, siempre y cuando las 
mande llamar*/

function consejo(){
    let clima = prompt("Como esta el clima hoy?");
    if (clima == "Caluroso"){
        alert("toma agua");  
    } else {
        alert("Abrigate")
    }
}

consejo();
consejo();
consejo();
consejo()

/*La sentencia sentencia for...of 
ejecuta un bloque de código 
para cada elemento de un objeto iterable*/ 
let iterable = "boo";

for (let value of iterable) {
  console.log(value);
}

/*La sentencia for..in iterará sobre 
TODAS las propiedades
de un objeto */
let arr = [3, 5, 7];
arr.foo = "hola";

for (let i in arr) {
  console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
  console.log(i); // logs "3", "5", "7"
}

// El método filter sirve para filtrar gente en un arreglo
//(en un diccionario, se pueden filtrar las personas con cierto valor)
let gente = [
    {nombre: "aaron", edad: 65},
    {nombre: "beth", edad: 2},
    {nombre: "cara", edad: 13},
    {nombre: "daniel", edad: 3},
    {nombre: "ella", edad: 25},
    {nombre: "fin", edad: 1},
    {nombre: "george", edad: 43},
]

let pequeños = gente.filter(persona => persona.edad <= 3)

console.log(pequeños);