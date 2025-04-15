//TASK 7

/* A matrix is an array of arrays, representing a grid with rows and columns. Use this task to experiment with matrices!

* Can you add a single number to an existing row?
* Can you add a whole new row of numbers?
* Can you remove a single number from a single row?
* Can you reverse one of the rows without affecting the others */

const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
  console.log(arr);

  // Type your code below this line!
  /*Para acceder al valor de una matriz se usan dos indices, para fila y columna
     matriz[fila][columna] */

//Add a single number to an existing row
  //Utilizamos .push para agregar elementos al final de un arreglo
  
  //Se elige primero la fila donde se agregará el nuevo elemento y luego se coloca
  arr[0].push(10); //Se agrega un 10 al final de la fila 1
  console.log(arr);

//Can you add a whole new row of numbers?
  //Se utiliza push para agregar una nueva fila de numeros

  arr.push([30,31,32,33]); //Se agrega una nueva fila con index 3 con los numeros dentro del parentesis de push
  console.log(arr);


//Can you remove a single number from a single row?
  //Se utiliza .splice([index],[cantidad de numeros a remover], [numero que se agrega])

  //Se elige primero la fila donde se agregará el nuevo elemento y luego se coloca
  arr[2].splice(4,1); //Se eligió la fila 2, la posición 4 y se quito un 1 numero, es decir 24
  console.log(arr);

//Can you reverse one of the rows without affecting the others 
  //Se utiliza .reverse que modifica el array original y regres el arreglo reverso

  arr[1].reverse(); //Se eligió la fila 1 y se invertirá
  console.log(arr);
  // Type your code above this line!