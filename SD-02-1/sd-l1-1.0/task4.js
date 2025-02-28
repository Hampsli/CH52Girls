// Refer to Task 4 in your Instructions to complete this task

/*for (let i = 0; i < 1; i++) {
    console.log("This is Task Four!");
  };*/

  for (let i = 1; i <= 105; i++) {
    let output = "";

    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    if (i % 7 === 0) output += "Woof";

    console.log(output || i);
}
