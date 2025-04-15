//TASK 3
//Use the `arr.splice()` method to insert the missing number in the given array at the correct position.

const arr = [1,2,3,4,5,6,7,9,10,11,12]

// Type your code below this line!

arr.splice(arr.indexOf(7)+1,0,8)

// Type your code above this line!

arr.forEach(element => console.log(element))