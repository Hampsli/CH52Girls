// Refer to Task 5 in your Instructions to complete this task
// Can you prompt the user to input the number of lines that will be generated, or to generate a specific line?

let num = parseFloat(prompt("Cuántos números quieres en la lista?:"));

for(let i = 1; i <=num; i++)
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