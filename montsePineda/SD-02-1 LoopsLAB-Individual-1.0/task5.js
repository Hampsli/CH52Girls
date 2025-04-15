// Refer to Task 5 in your Instructions to complete this task
//TASK 5
//Prompt the user to input the number of lines that will be generated, or to generate a specific line

let opcion=parseInt(prompt("Ingrese 1 si quiere generar cierta cantidad de lineas 0 2 si quiere generar una especifico"));
if (opcion == 1 ) {
  let cantidad=parseInt(prompt("Cantidad de lineas= "));
} else {
  let linea=parseInt(prompt("Linea= "));
}

for (let i = 1; i <= 105; i++) { //Se usa un for con i=1 porque ahí empieza, i++ significa que se le aumenta 1y acaba cuando i<=105
  if(i%3 === 0) { //Si es /3
    if(i%5 ===0) {
      if(i%7 ===0){
      console.log("FizzBuzzWoof"); //Si es/3,5,7
                  } else { console.log("FizzBuzz");  }} // Es /3 y 5 no 7
  } else if(i%5 === 0) { 
    console.log("Buzz");//Si solo es/5
  } else if(i%7 ===0){
    console.log("Woof"); //Si solo es/7
  } else { console.log(i); } //No /3, 5, 7
};