// Type your code below this line!

function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
    
    this.printMail = function() {
      console.log(this.subject + ": " + this.message);
  };
}
const subjectInput = prompt("Ingrese el asunto del correo:");
const messageInput = prompt("Ingrese el mensaje del correo:");

  
  const newMail = new Mail( subjectInput, messageInput );
  
  // Type your code above this line!
  
  newMail.printMail()