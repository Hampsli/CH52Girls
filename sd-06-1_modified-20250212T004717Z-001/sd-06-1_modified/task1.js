function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
  }
  
  // Type your code below this line!
  
  const newMail = new Mail("hello", "world") //pongo el valor a los atributos subject
  //y el atributo messsage en el orden sugerido
  
  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message)

  