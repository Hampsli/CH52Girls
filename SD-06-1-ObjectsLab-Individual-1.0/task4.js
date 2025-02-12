// Type your code below this line!
const prompt = require("prompt-sync")();

function Journey(start, end){
    this.start = start;
    this.end = end;
    this.bookingTravel = function(){ //Mensaje incluido como método
        console.log("Booking a taxi from " + this.start + " to " + this.end + ".")
    }
}

// Type your code above this line!
const from = process.argv[3] || prompt("Write an origin for your trip: ");
const to = process.argv[4] || prompt("Write a destination for your trip: ")

const travel = new Journey(from, to);

console.log("Booking a taxi from " + travel.start + " to " + travel.end + ".")
//travel.bookingTravel();