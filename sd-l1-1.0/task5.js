// Refer to Task 5 in your Instructions to complete this task

for (let i = 0; i < 1; i++) {
  i = parseInt(console.log("Ingresa un número: ")); 
  if (i%3 === 0 && i%5 === 0) {
    console.log("FizzBuzz");}
  else if (i % 3 === 0) {
    console.log("Fizz");} 
  else if (i % 5 === 0){
    console.log("Buzz");}
  else if (i % 7 === 0 ){
    console.log("Woof")
  }
  else {
    console.log(i);}
  };