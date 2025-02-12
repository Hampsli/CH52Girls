function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
  }
  
  // Type your code below this line!
  
  const newMail = new Mail(process.argv[3], process.argv[4])

  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message)

  //CONSOLE: node task2.js 1 "Hola" "Mundo"node task2.js 1 "Hola" "Mundo"