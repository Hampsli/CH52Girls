// Refer to Task 7 in your Instructions to complete this task

/*let buzzWords = [
    "Fizz",
    "Buzz",
    "Woof",
    "Bark",
    "Awoo",
    "Bang"
  ];
  
  for (let i = 0; i < 1; i++) {
    console.log("This is Task Seven!");
  };*/

  let limit = parseInt(prompt("¿Hasta qué número quieres contar?"), 10);
let results = [];
let buzzWords = ["PrimoBoom", "PrimoBang", "PrimoZap", "PrimoWhizz"]; // Lista de palabras

// Función para verificar si un número es primo
function esPrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

for (let i = 1; i <= limit; i++) {
    let output = "";

    if (i % 3 === 0) {
        output += "Fizz";
    }
    if (i % 5 === 0) {
        output += "Buzz";
    }
    if (i % 7 === 0) {
        output += "Woof";
    }
    if (esPrimo(i) && i % 2 !== 0) { // Si es primo e impar
        output = buzzWords[i % buzzWords.length]; // Usa una palabra del array
    }

    results.push(output || i);
}

console.log(results);
