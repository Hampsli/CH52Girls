// Refer to Task 6 in your Instructions to complete this task
//FizzBuzzWoof
for (let i = 1; i <= 105; i++) {
  
  if (i % 105 == 0){
    console.log("FizzBuzzWoof");
  } else{
    if (i % 15 == 0){
      console.log("FizzBuzz");
    } else{
      if (i % 3 == 0){
        console.log("Fizz");
      } else{
        if (i % 5 == 0){
          console.log("Buzz");
        } else{
          if (i % 7 == 0){
            console.log("Woof");
          } else{
            console.log(i);
          }
        }
      }
    }
  }
};