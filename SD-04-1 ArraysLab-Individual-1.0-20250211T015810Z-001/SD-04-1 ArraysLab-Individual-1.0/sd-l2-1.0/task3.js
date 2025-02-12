const arr = [1,2,3,4,5,6,7,9,10,11,12]

// Type your code below this line!

//Al inicio le puse 7, 6 pense que iba entre esos pero eso borraba un par, pero asi le indico que no quiero borrar nada.
arr.splice(7, 0, 8)
console.log(arr)

// Type your code above this line!

arr.forEach(element => console.log(element))