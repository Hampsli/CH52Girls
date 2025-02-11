const arr = [1,2,3,4,5,6,7,9,10,11,12]

// Type your code below this line!
/*The first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed.*/

arr.splice(7,0,8);

// Type your code above this line!

arr.forEach(element => console.log(element))