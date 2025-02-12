// Type your code below this line!

function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
        // Definir el método printMail
        this.printMail = function() {
          console.log(this.subject + ": " + this.message);
      };
    
  }
  
  const newMail = new Mail("hello", "world")
  
  // Type your code above this line!
  
  newMail.printMail()