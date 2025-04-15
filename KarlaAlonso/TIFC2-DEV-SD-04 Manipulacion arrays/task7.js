const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
  // Type your code below this line!
  
  //add a single number to an existing row (row 2, value 150)
  arr[2].push(150);
  console.log(arr);

  //add a new row of numbers

  arr.push([30,31,32,33,34,35,36,37,38]);
  console.log(arr);

  //remove a single number from a single row (row 1, value 12)
  arr[1].splice(2, 1);  // Elimina el valor en el índice 1 de la fila 0
  console.log(arr);  

  //reverse one of the rows without affecting the others
  arr[2].reverse();  // Invierte la fila en el índice 1
  console.log(arr);  // Resultado: [ [1, 2, 3], [6, 5, 4], [7, 8, 9] ]


  // Type your code above this line!