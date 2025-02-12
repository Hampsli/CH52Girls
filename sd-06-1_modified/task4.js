// Type your code below this line!

function Journey(start,end){
    this.from = start
    this.to = end

}

// Type your code above this line!

const travel = new Journey(process.argv[3], process.argv[4])


console.log("Booking a taxi from " + travel.from + " to " + travel.to + ".")