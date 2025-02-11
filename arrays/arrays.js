 /*Ciclos
  
  Son una estructura de codigo que nos permite ejecutar una instruccion de forma repetida, siempre y cuando cumpla la condicion.Son estructuras de control.

  Estos ciclos estan inculados a variables y condiciones, es importante que nuestros ciclos sean finitos
  */
  /* While se sigue ejecutando hasta que la condicion sea falsa. Primero se preguntas y luego se ejecuta*/

  let numero = 0;

  while (numero <= 5){
    console.log(numero);
    numero++
  }
  //do while, primero ejecuta y dspues pregunta la condicion

  do{
    console.log(numero);
    numero ++
  }

  while(numero  <= 5);

  //break nos permite detener el ciclo con base en lo que necesite

  while(numero <100){
    console.log(numero);
    numero++
    if(numero ==10){
        break;  //para detener el ciclo
    }
  }
  

  /* Ciclo for
  SE compone  de tres partes
  1. Declarar variable
  2. Inicializando,(crear la condición)
  3. Iterar
  */

 /* for (let i = 0; i < 6; i++){
    document.write(i);
  } */

  //Investigar el ciclo for in y ciclo for of


  //Arrays es una estructura de datos, en este caso una lista, con datos que comparten caracteristicas
  //Dentro de un array los elementos cuentan con un indice que empieza de 0 y una posicion, que inicia 1

 let frutas = [`papaya`, `platano`, `mango`, `fresa`, `tuna`];
 console.log(frutas);

 //Metodo Splice( agregar un elemento),permite eliminar y/ o modificar el array
 frutas.splice(1,0, `uva`);
 console.log(frutas);

 frutas.splice(2,4);
 console.log(frutas);

 let numeros = [1,2,3];
 numeros.splice(1,0,4);
 console.log(numeros);


 //Metodo shift-elimino el primer elemento

 frutas.shift();
 console.log(frutas);

//Metodo pop-elimina el ultimo elemento
 frutas.pop();
 console.log(frutas);

 //metodo filter buscar tarea

 const usuarios ={
    "nombre" : "Fernanda" ,
    "edad" : "32" ,
    "correo" : "fernanda@gmail.com",
    "telefono" : "5567765653"
}
console.log(usuarios.edad); //notacion de objeto

/*  Funciones son bloques de codigo que nos permiten modularizar y se pueden ejecutar en cualquier parte del código, siempre y cuando las mande a llamar*/

function consejo(){
    let clima = prompt("Como esta en clima?");
    if (clima == "Caluroso"){
        alet ("toma agua");    
    }else {
        alert("Abrigate");
    }
}

consejo();


 