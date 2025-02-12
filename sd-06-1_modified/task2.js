function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
  }
  
  // Type your code below this line!
  
  const newMail = new Mail("Hello", "World")
  
  process = ["node", "index.js", 2, "Susana"]
  // Type your code above this line!
  
  console.log(process[0]+ " " + process[1] + " " + process[2] + " " + newMail.subject + ": " + newMail.message) // + " " +process[3])