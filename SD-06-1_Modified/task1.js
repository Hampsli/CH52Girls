function Mail(subj, msg) {
    this.subject = String(subj);
    this.message = String(msg);
  }
  
  // Type your code below this line!
  
  const newMail = new Mail("hello","world");
  
  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message)