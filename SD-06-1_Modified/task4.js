// Type your code below this line!
function Journey(start, end) {
    this.from = String(start);
    this.to = String(end);
}


const from = "Queens"; 
const to = "Brooklyn";   


const travel = new Journey(from, to);

console.log("Booking a taxi from " + travel.from + " to " + travel.to + ".");