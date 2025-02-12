/** For this task, you will need to write your own constructor.
    * Create a constructor called Journey that takes two parameters: start and end. <---ESTA INDICACION ESTA MAL
    * Create a pair of constants called from and to, and assign them the values from the command line arguments. */

// Type your code below this line!

function Journey(from, to) {
    this.start = from
    this.end = to 
  }
  
  let from = process.argv[3];
  let to = process.argv[4];


// Type your code above this line!

const travel = new Journey(from, to)

console.log("Booking a taxi from " + travel.start + " to " + travel.end + ".")