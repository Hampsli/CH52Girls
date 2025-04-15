function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
  }
  
  // Type your code below this line!
  
  const subject = process.argv[3]; 
  const message = process.argv[4]; 
  
  const mailList = [];
  

 
  const newMail = new Mail(subject, message);
  
  
  mailList.push(newMail);

  console.log(newMail.subject + ": " + newMail.message)
  /*2. You have been presented with a constructor for a Mail object.
    * Modify the code so that the user provides their own subject and message as a execution parameters in that order. */