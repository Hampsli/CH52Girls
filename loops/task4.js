// Refer to Task 4 in your Instructions to complete this task
// Agreagar condiciones para fizzwoof,buzzwoof y fizzbuzzwoof
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
  else if (i % 7 === 0) {
    console.log('woof')
  }
  else {
      console.log(i)
  };