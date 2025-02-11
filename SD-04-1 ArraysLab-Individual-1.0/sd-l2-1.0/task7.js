const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
// Type your code below this line!
//* Can you add a single number to an existing row?
  // First the name of the array, the the position of the ARRAY, the .push(value you with to add)
  arr[2].push(30)
  console.log(arr)
  // Type your code above this line!

//* Can you add a whole new row of numbers?
//Agregamos la lista a una nueva variable y la concatenamos 
const lista = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
let arr2 = arr.concat(lista)
console.log(arr2)

//* Can you remove a single number from a single row?
//Elimine el 30 que se puso anteriormente
arr[2].splice(10, 1)
console.log(arr)
//* Can you reverse one of the rows without affecting the others
let arr3 = arr[1].reverse()
arr3.forEach(element => console.log(element))