function Mail(subj, msg) {
  this.subject = subj || "hello";
  this.message = msg || "world";
}

// Type your code below this line!
const newMail = new Mail();

// Type your code above this line!
console.log(newMail.subject + ": " + newMail.message);


