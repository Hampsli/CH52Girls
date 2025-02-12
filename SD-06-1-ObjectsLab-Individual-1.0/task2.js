const prompt = require("prompt-sync")();

function Mail(subj, msg) {
    this.subject = subj;
    this.message = msg;
  }
  
// Type your code below this line!
let text1;
let text2;

if (process.argv[3]) {
  text1 = process.argv[3];
} else {
  text1 = prompt("Write a subject: ");
}
if (process.argv[4]) {
  text2 = process.argv[4];
} else {
  text2 = prompt("Write a message: "); 
}
const newMail = new Mail(text1, text2);
// Type your code above this line!
  
console.log(newMail.subject + ": " + newMail.message);