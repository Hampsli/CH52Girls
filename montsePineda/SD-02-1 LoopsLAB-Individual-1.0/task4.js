// Refer to Task 4 in your Instructions to complete this task
//TASK 4
//continue the pattern by also replacing every 7th number with Woof



for (let i = 1; i <= 105; i++) { //Se usa un for con i=1 porque ahí empieza, i++ significa que se le aumenta 1y acaba cuando i<=105
  if(i%3 === 0) { //Si es /3
    if(i%5 ===0) { 
      if(i%7 ===0){
      console.log("FizzBuzzWoof"); }//Si es/3,5,7
    } else { console.log("FizzBuzz"); } 
  console.log("Fizz");
  } else if(i%5 === 0) { 
    console.log("Buzz");//Si solo es/5
  } else if(i%7 ===0){
    console.log("Woof"); //Si solo es/7
  } else {console.log(i)} //No /3, 5, 7
};

