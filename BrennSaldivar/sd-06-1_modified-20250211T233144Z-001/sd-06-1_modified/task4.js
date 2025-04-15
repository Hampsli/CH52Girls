// Type your code below this line!
function Journey(start, end){
    this.start = start
    this.end = end
     this.printJourney=function(){
      console.log(this.start  + this.end);
    };
  }

  const from= process.argv[3]
  const to =  process.argv[4] 
 



// Type your code above this line!

const travel = new Journey(from, to)

console.log("Booking a taxi from " + travel.start + " to " + travel.end + ".")

/*4. For this task, you will need to write your own constructor.
    * Create a constructor called Journey that takes two parameters: start and end.
    * Create a pair of constants called from and to, and assign them the values from the command line arguments.*/