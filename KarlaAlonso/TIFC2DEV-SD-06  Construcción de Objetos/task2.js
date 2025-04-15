function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
    }
  
  // Type your code below this line!
  console.log(process.argv);

  const subjectUser = process.argv[3];
  const messageUser = process.argv[4];


  const newMail = new Mail(subjectUser, messageUser);
       
  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message);
  