function Mail(subj, msg) {
    this.subject = subj;
    this.message = msg;
  }
  
  // Type your code below this line!
  const subject = process.argv [2];
  const message = process.argv [3];
  const newMail = new Mail(subject, message)
  
  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message)