// Type your code below this line!

function Mail(subj, msg) {
    this.subject = subj
    this.message = msg

    this.printMail = function (){
      console.log(subj + ": " + msg)
    }
  }
  
  const newMail = new Mail("HOLA","WORLD!!!!!")
  
  // Type your code above this line!
  
  newMail.printMail()