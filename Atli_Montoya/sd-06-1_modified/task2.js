// Type your code below this line!
function Mail(subj, msg) {
  this.subject = subj;
  this.message = msg;
}


const newMail = new Mail(process.argv[3], process.argv[4]);

// Type your code above this line!

console.log(newMail.subject + ": " + newMail.message);

