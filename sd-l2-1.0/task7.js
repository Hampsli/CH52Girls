const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
  // Type your code below this line!

  /* Agregar un solo numero a una lista existente */ 
  arr[0][10] = arr.push();
  console.log(arr);

  /* Agregar una nueva fila de numeros */
  arr.push([30,31,32,33,34,35,36,37,38,39]);
  console.log(arr);
 
  /* eliminar un solo numero de una sola fila */
  arr[1].splice(4,1); 
  console.log(arr);
  
  /* Invertir una fila sin afectar las demas */
  arr[0].reverse();

  console.log(arr);
  // Type your code above this line!