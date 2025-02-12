// Type your code below this line!
function Journey(start, end) {
    this.start = start;
    this.end = end;
}

// Type your code above this line!
const from = prompt("Ingrese el inicio de su viaje (desde dónde viene):");
const to = prompt("Ingrese el destino de su viaje (hacia dónde se dirige):");

const travel = new Journey(from, to)

console.log("Booking a taxi from " + travel.start + " to " + travel.end + ".")