// Type your code below this line!

function Journey(start, end) {
    this.start = start;
    this.end = end;
}

const [, , , from, to] = process.argv;

// Type your code above this line!

const travel = new Journey(from, to)

console.log("Booking a taxi from " + travel.start + " to " + travel.end + ".")