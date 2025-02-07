// Refer to Task 4 in your Instructions to complete this task
/*
for (let i = 0; i < 1; i++) {
    console.log("This is Task Four!");
  };
*/
for (let i = 0; i <= 105; i++) {
  if (i%3===0 & i%5===0 & i%7===0){  
    console.log("FizzBuzzWoof");
  } else if (i%3===0 & i%5===0){
    console.log("FizzBuzz");
  } else if (i%3===0 & i%7===0){
    console.log("FizzWoof");
  } else if (i%5===0 & i%7===0){
    console.log("BuzzWoof");
  } else if (i%3===0){
    console.log("Fizz");
  } else if (i%5===0){
    console.log("Buzz");
  } else if (i%7===0){
    console.log("Woof");
  } else {
    console.log(i);
  }
}