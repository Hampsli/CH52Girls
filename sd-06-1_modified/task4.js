// Type your code below this line!

function Journey(from, to){
    this.start = from
    this.end = to
}

from= prompt("from:");
to= prompt("end:");

// Type your code above this line!

const travel = new Journey(from, to)

console.log("Booking a taxi from " + travel.start + " to " + travel.end + ".")