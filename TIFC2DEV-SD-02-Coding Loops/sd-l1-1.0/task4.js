// Refer to Task 4 in your Instructions to complete this task

for (let i = 1; i < 106; i++) {
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
        console.log("Woof");
      }
      else{
        console.log(i);
      }
      
    }
    
  } 
};