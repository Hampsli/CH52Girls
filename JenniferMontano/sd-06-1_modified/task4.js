// Type your code below this line!
function Journey(start, end) {
  this.start = start;
  this.end = end;
  //creamos el constructor que asigna start y end
}

// Type your code above this line!
// extraemos los valores de from y to y los guardamos en la
// intancia de travel con esos valores
const from = process.argv[3];
const to = process.argv[4];
const travel = new Journey(from, to);

console.log("Booking a taxi from " + travel.start + " to " + travel.end + ".");
