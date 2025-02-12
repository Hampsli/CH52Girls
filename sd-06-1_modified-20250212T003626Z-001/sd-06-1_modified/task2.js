function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
  }
  
  // Type your code below this line!
  //Ocupamos el "const" porque no necesitamos que cambie el valor.Solo pedimos el mensaje una vez y no queremos modificarlo
  //process.argv:Es una lista (o arreglo) que guarda los datos que escribimos cuando ejecutamos un programa en Node.js desde la terminal.
  //Los process.argv 0,1 y 2 se ignoran
  const userSubject = process.argv[3]; //Para tomar el asunto del tercer argumento (el asunto del correo)
  const userMessage = process.argv[4]; //Para tomar el asunto del cuarto argumento (el mensaje del correo)
  const newMail = new Mail(userSubject, userMessage)
  
  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message)