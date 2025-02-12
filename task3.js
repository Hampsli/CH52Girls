// Type your code below this line!
function Mail(subj, msg) {
  this.subject = subj;
  this.message = msg;
  this.printMail = function() {
      console.log(`${this.subject}: ${this.message}`);
  };
}

// Type your code below this line!
const newMail = new Mail(process.argv[3], process.argv[4]);

// Type your code above this line!
newMail.printMail();
