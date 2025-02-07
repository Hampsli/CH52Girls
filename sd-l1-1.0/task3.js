// Refer to Task 3 in your Instructions to complete this task

for (let i = 1; i < 106; i++) {
  a = "Fizz";
  b = "Buzz";

  if (i % 3 === 0 & i % 5 === 0) {
      console.log(a + b);
  } else if (i % 3 === 0) {
      console.log(a);
  } else if (i % 5 === 0) {
      console.log(b);
  } else {
      console.log(i);
  }
}
