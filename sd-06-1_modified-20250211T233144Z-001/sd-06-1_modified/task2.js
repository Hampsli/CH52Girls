function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
  }
  
  // Type your code below this line!
  
  const subject = process.argv[3]; // El primer parámetro después de node y el archivo
  const message = process.argv[4]; // El segundo parámetro
  
  const mailList = [];
  

  // Creamos el objeto de Mail 
  const newMail = new Mail(subject, message);
  
  // Lo agregamos a la lista
  mailList.push(newMail);

  console.log(newMail.subject + ": " + newMail.message)
  /*2. You have been presented with a constructor for a Mail object.
    * Modify the code so that the user provides their own subject and message as a execution parameters in that order. */