//TASK 4

for (let i = 1; i < 106; i++) {
  let result
  if (i % 3 == 0 & i % 5 == 0 & i % 7 == 0) {
    result = "FizzBuzzWoof";
  }
  else if (i % 3 == 0 & i % 5 == 0) {
    result = "FizzBuzz";
  }
  else if (i % 3 == 0 & i % 7 == 0) {
    result = "FizzWoof";
  }
  else if (i % 5 == 0 & i % 7 == 0) {
    result = "BuzzWoof";
  }
  else if (i % 3 == 0) {
    result = "Fizz";
  }
  else if (i % 5 == 0) {
    result = "Buzz";
  }
  else if (i % 7 == 0) {
    result = "Woof";
  }
  else {
    result = i;
  }
    
console.log(result);
};

/*
let result_3 = "Fizz";
let result_5 = "Buzz";
let result_7 = "Woof";
let result;

for (let i = 1; i < 106; i++) {
  if (i % 3 == 0 & i % 5 == 0 & i % 7 == 0) {
    result = result_3 + result_5 + result_7;
  }
  else if (i % 3 == 0 & i % 5 == 0) {
    result = result_3 + result_5;
  }
  else if (i % 3 == 0 & i % 7 == 0) {
    result = result_3 + result_7;
  }
  else if (i % 5 == 0 & i % 7 == 0) {
    result = result_5 + result_7;
  }
  else if (i % 3 == 0) {
    result = result_3;
  }
  else if (i % 5 == 0) {
    result = result_5;
  }
  else if (i % 7 == 0) {
    result = result_7;
  }
  else {
    result = i;
  }
    
console.log(result);
};
*/