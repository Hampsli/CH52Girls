function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
  }
  
  // Type your code below this line!
  
  let subject = process.argv[3];
  let message = process.argv[4];
  const newMail = new Mail(subject,message);
  
  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message)