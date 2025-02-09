// Refer to Task 4 in your Instructions to complete this task

for (let i = 1; i <= 105; i++) {
  let result = ""; // Iniciamos una variable vacía para concatenar los resultados

  if (i % 3 === 0) {
    result += "Fizz"; // Si es múltiplo de 3, agrega "Fizz"
  }
  if (i % 5 === 0) {
    result += "Buzz"; // Si es múltiplo de 5, agrega "Buzz"
  }
  if (i % 7 === 0) {
    result += "Woof"; // Si es múltiplo de 7, agrega "Woof"
  }

  if (result === "") {
    console.log(i); // Si no es múltiplo de 3, 5 ni 7, imprime el número
  } else {
    console.log(result); // Si se concatenaron cadenas, las imprime
  }
}
