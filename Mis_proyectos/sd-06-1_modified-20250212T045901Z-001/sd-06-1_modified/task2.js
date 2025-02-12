function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
  }
  
  // Type your code below this line!
  
  const subjectInput = prompt ("ingresa el asunto del correo");
  const messageInput = prompt("ingrresa el mensaje del correo");

  const newMail = new Mail( subjectInput, messageInput );
  
  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message)