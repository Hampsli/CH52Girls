// Refer to Task 3 in your Instructions to complete this task

//TASK 1
//JavaScript program that will output every number from 1 to 105
  //TASK 2
  //Replace every 3rd number with Fizz
  //TASK 3
  //Replace every 5th number with Buzz, and every number that satisfies both conditions with FizzBuzz

for (let i = 1; i <= 105; i++) { //Se usa un for con i=1 porque ahí empieza, i++ significa que se le aumenta 1y acaba cuando i<=105
  if(i%3 === 0) { //Si es /3
    if(i%5 ===0) {
      console.log("FizzBuzz"); //Si es/3 y 5
    } else {
      console.log("Fizz"); //Si solo es/3
    }
  } else if(i%5 === 0) { //Si solo es/5
        console.log("Buzz");
  } else {
    console.log(i); //No /3 y 5
  }
};


