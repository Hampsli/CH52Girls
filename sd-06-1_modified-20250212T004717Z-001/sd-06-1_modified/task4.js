// Type your code below this line!
function Journey(start, end){
    this.start =start;
    this.end = end;
}

const from = process.argv[3];  // Asignamos el valor de process.argv[3] a 'from'
const to = process.argv[4];    // Asignamos el valor de process.argv[4] a 'to'

// Type your code above this line!

const travel = new Journey(from, to);

console.log("Booking a taxi from " + travel.start + " to " + travel.end + ".");