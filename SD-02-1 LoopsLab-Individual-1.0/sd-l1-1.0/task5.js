// Refer to Task 5 in your Instructions to complete this task
/*
for (let i = 0; i < 1; i++) {
  console.log("This is Task Five!");
};
*/

//function fizzbuzz(i) {
  
//}
// ****INPUT DEL USUARIO**
const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
rl.question('¿Hasta que numero quieres imprimir?', (numeroMax) =>{
  numeroMax=parseInt(numeroMax);
  for (let i = 0; i <= numeroMax; i++) {
    if (i%3==0 & i%5==0 & i%7==0){  
      console.log("FizzBuzzWoof");
    } else if (i%3==0 & i%5==0){
      console.log("FizzBuzz");
    } else if (i%3==0){
      console.log("Fizz");
    } else if (i%5==0){
      console.log("Buzz");
    } else if (i%7==0){
      console.log("Woof");
    } else {
      console.log(i);
    }
  }
  rl.close();
});
/*
for (let j = 0; j <= number; j++) {
  fizzbuzz(j);
}
*/