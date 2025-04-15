/* TASK 4
* Create a constructor called Journey that takes two parameters: start and end.
* Create a pair of constants called from and to, and assign them the values from the command line arguments. */


// Type your code below this line!

// Función constructora Journey toma start y end 
function Journey(start, end){
    this.start=start;
    this.end=end;
}

//Crear constantes que se llaman from y to que el usuario ingresa el valor
const from = process.argv[3]; //primer variable
const to = process.argv[4];   //segunda variable

// Type your code above this line!

const travel = new Journey(from, to)

console.log("Booking a taxi from " + travel.start + " to " + travel.end + ".")