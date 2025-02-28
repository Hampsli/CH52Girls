/*const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  */
  // Type your code below this line!
  
//MIS NOTAS
let matriz = [
  [0,1,2,3,4,5,6,7,8,9], //fila numero 0
  [10,11,12,13,14,15,16,17,18,19], // fila numero 1
  [20,21,22,23,24,25,26,27,28,29] // fila numero 2
];

// esta funcion es para agregar un número a la primera fila
matriz[0].push(10);

//en esta se le agregará una nueva fila
matriz.push([50, 60, 70]);

// eliminar liminar el número 12 de la segunda fila
matriz[1].splice(2, 12);

// reverse se va a usar para invertir la tercera fila
matriz[2].reverse();

console.log(matriz);
