// Type your code below this line!
 function Journey(inicio,fin){
    
    this.inicio= inicio; 
    this.fin= fin;
 }

// Type your code above this line!
const from = process.argv[3]; 
const to = process.argv[4]; 

const travel = new Journey(from, to)

console.log("Booking a taxi from " + travel.inicio + " to " + travel.fin + ".")