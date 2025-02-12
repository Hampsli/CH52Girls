// Type your code below this line!

function Mail(subj, msg) {
    this.subject = String(subj);
    this.message = String(msg);
    this.printMail = function(){
      console.log(this.subj+" : "+ this.msg);
    }
  }
  
  const subject = prompt("introduce saludo: ");
  const message = prompt("introduce mensaje: ");
  const newMail = new Mail(subject,message );
  
  // Type your code above this line!
  
  newMail.printMail();