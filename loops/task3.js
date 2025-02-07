// Refer to Task 3 in your Instructions to complete this task
//Can you also replace every 5th number with Buzz, and every number that satisfies both conditions with FizzBuzz?

for(let i = 1; i <=105; i++)
  if (i % 15 === 0) {
      console.log ("fizzbuzz")   
  }
  else if (i % 3 === 0) {
    console.log("fizz")
 }
  else if (i % 5 === 0) {
      console.log('buzz')
  } 
  else {
      console.log(i)
  };