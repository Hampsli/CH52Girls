Refer to Task 4 in your Instructions to complete this task
// for (let i = 0; i <= 105; i++) {
//   if (i % 15 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//       console.log("Fizz");
//   } else if (i % 5 === 0) {
//       console.log("Buzz");
//   } else if (i % 7 === 0) {
//       console.log("Woof");
//   } else {
//       console.log(i);
//     }
//   }

for (let i = 0; i <= 105; i++) {
  let salida = "";
  if (i % 3 === 0) salida += "Fizz";
  if (i % 5 === 0) salida += "Buzz";
  if (i % 7 === 0) salida += "Woof";
  console.log(salida || i);
}
