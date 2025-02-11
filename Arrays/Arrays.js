/*Ciclos/bucles/loops
Son una estructura de còdigo que nos permiten ejecutar una instruccion de 
forma repetida, siempre y cuando cumpla la condicion.

Estos ciclos estan vinculados a variales y condiciones, es importante que nuestros 
ciclos sean finitos
*/
/*while se sigue ejecutando hasta qe la condicion sea falsa,
primero se pregunta y luego se ejecuta*/

/*let numero = 0;

while (numero <=5) {
    console.log(numero);
    numero++
}*/ 


/*
while (numero > 16){
    document.write(numero);
}
*/

/*do while, primero ejecuta y despues pregunta
la condicion*/

/*do{
    console.log(numero);
    numero ++
}
while (numero <=5);

/*Break:Nos permite detener el ciclo con base en 
lo que necesite*/
/*while(numero < 100){
    console.log(numero);
    numero++
    if (numero == 10){
        break;
    }
}


/*Ciclo for
Se compone de tres partes:
1.declarando mi variable
2.inicializando mi variable
3.iterando (repitiendo) mi variable (i++)
la condicion es (i<6), un ciclo debe de tener una condicion forzosamente*/

/*for(let i=0; i<6; i++){
    document.write(i)
}

/*Arrays es una estructura de datos en este caso una lista,
con datos que comparten caracteristicas*/

/*let frutas = [ 'papaya', 'platano', 'mango', 'fresa', 'tuna']
console.log(frutas)
frutas.shift(); 
console.log(frutas);

/*metodo splice permite eliminar elementos especificos
y/o modificar el array*/
/*frutas,splice(1,0,'uva');

/*metodo shift
elimina el primer elemento*/
/*frutas.shift();

/*metodo pop
elimina el ultimo elemento*/
/*frutas.pop();

/*Objeto:Diccionario
aqui se utiliza mucho la variable "cons"
Aqui se utiliza "," para separar los valores
Aqui tambien se utiliza ":"*/

/*const usuarixs = {
    "nombre" : "Daniela",
    "edad" : "26",
    "email" : "danycf98@gmail.com"

}

console.log(usuarixs.edad);

/*Funciones son bloque de codigo que nos permiten 
modulizar y se pueden ejecturar en cualquier parte
del còdigo, siempre y cuando las mande a llamar*/

/*function consejo(){
    let clima = prompt("Como esta el clima hoy?");
    if (clima == "caluroso"){
        alert("toma agua");
    } else {
        alert("abrigate");
    }
}
*/
/*
consejo()
consejo()
consejo()
consejo()
*/


//Definiendo los dias de la semana
const week = [
    "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"
  ];
  
//Resolviendo el primer problema: Realizando correccion del bucle
for (let i = 0; i < week.length; i++) {
    console.log("El día en la posición " + i + " es " + week[i]);
  }

//Segundo problema: Verificando que sean fines de semana
for (let i = 0; i < week.length; i++) {
    let day = week[i];
    let weekend = (day === "Sábado" || day === "Domingo");
  
    if (weekend) {
      console.log(day + " es fin de semana!");
    }
  }

  //Tercer problema:Verificando si es un dia laboral (de la misma manera que el anterior)
  for (let i = 0; i < week.length; i++) {
    let day = week[i];
    let workdays = (day === "Lunes" || day === "Martes" || day === "Miércoles"
        || day === "Jueves" || day === "Viernes");
    if (workdays) {
        console.log(day + " es dia laboral!");
      }
    }
 

  
