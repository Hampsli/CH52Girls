const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
  // Type your code below this line!
  //1.¿Puedes agregar un solo número a una fila existente?

  //arr[0]. -->se refiere a la primera fila de la matriz
  //push(10) --> Agrega el número 10 al final de la primera fila
  arr[0].push(10); 
  console.log(arr);

  //2.¿Puedes agregar una fila completa de números nuevos?
  arr.push([30, 31, 32, 33, 34, 35, 36, 37, 38, 39]); 
  console.log(arr);

  //3.¿Puedes eliminar un solo número de una fila?
  //arr[1] --> arr[1] se refiere a la segunda fila de la matriz
  //splice(3, 1) --> Para agregar, eliminar o reemplazar elementos dentro de un arreglo
  arr[1].splice(3, 1); // Elimina el número en la posición 3 de la segunda fila
  console.log(arr);

  //4.¿Puedes invertir una de las filas sin afectar las demás?
  //Invirtiendo la tercera fila:
  arr[2].reverse(); 
  console.log(arr);

  
  // Type your code above this line!