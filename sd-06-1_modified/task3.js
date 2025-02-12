// Type your code below this line!

function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
    
    this.printMail = function () {
      console.log(subj, ": " , msg);
    }
  }
  
  const newMail = new Mail(prompt("subject:"),prompt("message:"))


  
  // Type your code above this line!
  
  newMail.printMail()