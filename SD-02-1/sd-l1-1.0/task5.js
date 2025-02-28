// Refer to Task 5 in your Instructions to complete this task

/*for (let i = 0; i < 1; i++) {
    console.log("This is Task Five!");
  };*/

  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('¿Cuántas líneas deseas generar? ', (numLines) => {
    for (let i = 1; i <= numLines; i++) {
        let output = "";
        if (i % 3 === 0) output += "Fizz";
        if (i % 5 === 0) output += "Buzz";
        if (i % 7 === 0) output += "Woof";
        console.log(output || i);
    }
    readline.close();
});