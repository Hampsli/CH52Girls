/* TASK 1
You have been presented with a constructor for a Mail object.

* Modify the code so that the subject is the word `hello` and the message is the word `world`. */


function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
  }
  
  // Type your code below this line!
  
  const newMail = new Mail("hello","world" )
  
  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message)