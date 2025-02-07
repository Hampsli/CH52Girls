// Refer to Task 5 in your Instructions to complete this task

let limit = parseInt(prompt("Ingrese el número de líneas a generar: "));

for (let i = 1; i <= limit; i++) {
    let output = "";

    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    if (i % 7 === 0) output += "Woof";

    console.log(output || i);
}
