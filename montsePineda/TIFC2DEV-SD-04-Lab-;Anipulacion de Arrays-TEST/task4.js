//TASK 4
//Use the `arr.splice()` method to delete one of the two duplicate numbers in the given array

const arr = [1,2,3,4,5,5,6,7,8,9,10,11,12,13,14]

// Type your code below this line!

let indexdup=arr.indexOf(5);
console.log(indexdup);

arr.splice(indexdup,1)

// Type your code above this line!

arr.forEach(element => console.log(element))