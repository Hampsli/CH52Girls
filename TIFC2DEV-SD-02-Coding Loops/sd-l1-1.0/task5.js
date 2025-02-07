// Refer to Task 5 in your Instructions to complete this task
Inicio=prompt("Dime en que numero quieres iniciar");
Final =prompt("Dime en que numero quieres acabar");

for (let Inicio = 1; i < (Final+1); i++) {
  if (i % 3 == 0) {
    
    if(i % 5 == 0){
      if (i % 7 == 0){
        console.log("FizzBuzzWoof");
      }
      else{
        console.log("FizzBuzz");
      }
      
    }
    else {
      if (i % 7 == 0){
        console.log("FizzWoof");
      }
      else{
        console.log("Fizz");
      }
      
    }
  }
  else{
    if(i % 5 == 0 ){
      if( i % 7 == 0){
        console.log("BuzzWoof");
      }
      else{
        console.log("Buzz");
      }
      
    }
    else{
      if (i % 7 == 0){
        console.log("woof");
      }
      else{
        console.log(i);
      }
      
    }
    
  } 
};