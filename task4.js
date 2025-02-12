function Mail(subj, msg) {
    this.subject = subj;
    this.message = msg;
    this.printMail = function() {
        console.log(`${this.subject}: ${this.message}`);
    };
}

function Journey(start, end) {
    this.start = start;
    this.end = end;
}

// Type your code below this line!
const from = process.argv[3];
const to = process.argv[4];
const travel = new Journey(from, to);

// Type your code above this line!
console.log("Booking a taxi from " + travel.start + " to " + travel.end + ".");

