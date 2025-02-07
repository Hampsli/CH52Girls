// Refer to Task 3 in your Instructions to complete this task

for (let i = 1; i <= 105; i++) { 
  salida = "";
  if (i%3 == 0){
    salida = "Fizz";
  }
  if (i%5 == 0){
    salida += "Buzz";
  }
    console.log( salida || i);  
};