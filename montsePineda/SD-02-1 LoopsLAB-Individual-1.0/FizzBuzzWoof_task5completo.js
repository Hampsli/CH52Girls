
for (let i = 1; i <= 105; i++) { //Se usa un for con i=1 porque ahí empieza, i++ significa que se le aumenta 1y acaba cuando i<=105
  if(i%3===0 && i%5===0 && i%7===0){
    console.log("FizzBuzzWoof")
  } else if (i%3===0 && i%5===0 && i%7!==0){
    console.log("FizzBuzz")
  } else if (i%3===0 && i%5!==0 && i%7===0){
    console.log("FizzWoof")
  } else if (i%3!==0 && i%5===0 && i%7===0){
    console.log("BuzzWoof")
  } else if (i%3===0){
    console.log("Fizz")
  } else if (i%5===0){
    console.log("Buzz")
  } else if(i%7===0){
    console.log("Woof")
  } else { console.log(i)}}


  


