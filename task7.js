// Refer to Task 7 in your Instructions to complete this task

let buzzWords = ["PrimeBoom", "MagicPrime", "LuckyPrime"];
let resultados = [];

function esPrimo(n) {
    if (n < 2) return false;
    for (let j = 2; j < n; j++) {
        if (n % j === 0) return false;
    }
    return true;
}

for (let i = 1; i <= 105; i++) {
    let output = "";

    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    if (i % 7 === 0) output += "Woof";
    if (esPrimo(i) && i % 2 !== 0) output = buzzWords[i % buzzWords.length];

    resultados.push(output || i);
}

console.log(resultados);
