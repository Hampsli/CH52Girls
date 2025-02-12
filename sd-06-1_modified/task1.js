function Mail(subj ="hello", msg = "world") {
    this.subject = subj
    this.message = msg
  }
  
  // Type your code below this line!
  
  //const subj = prompt("subject")
  //const msg = prompt("message")
  const newMail = new Mail(subj, msg)

  
  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message)