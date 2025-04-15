const arr = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
];

// Type your code below this line!

// Agregar un número a una fila existente
arr[0].push(10);
console.log(arr[0]);

// Agregar una fila completa de números
arr.push([30, 31, 32, 33, 34, 35, 36, 37, 38, 39]);
console.log(arr);

// Eliminar un solo número de la fila
arr[1].splice(1, 1);
console.log(arr[1]);

// Invertir una de las filas sin afectar a las demás
arr[2].reverse();
console.log(arr);

// Type your code above this line!
