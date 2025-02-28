/*function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
  }*/
  // Type your code below this line!
  
 // const newMail = new Mail(  )  
  //console.log(newMail.subject + ": " + newMail.message)

  function Mail() {
    this.subject = "hello";
    this.message = "world";
  }
  const newMail = new Mail(  );
  console.log(newMail.subject + ": " + newMail.message)
