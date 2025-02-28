function Journey(start, end) {
    this.start = start;
    this.end = end;
}

// Obtener valores de la línea de comandos
//  process.argv permite que el usuario ingrese valores
const from = process.argv[3]; // start 
const to = process.argv[4];   //end

const travel = new Journey(from, to)

console.log("Booking a taxi from " + travel.start + " to " + travel.end + ".");