/* TASK 3
* Modify the code so that the user provides their own subject and message as execution parameters in that order.
* Then, extend the constructor to include a printMail() method that prints the following to the Console:
  * `<subj>: <msg>`
  * For example, if the two inputs are `hello` and `world`, then the output should be `hello: world`. */


// Type your code below this line!

function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
    
  //Método que imprime `<subj>:<msg>`
  this.printMail = function(){
    console.log(this.subject + ": " + this.message);
  };
  }
  
  //Usuario introduce la info 
  const subject = process.argv[3]; //Para acceder al subject
  const message = process.argv[4];

  const newMail = new Mail(subject,message)
  
  // Type your code above this line!
  
  newMail.printMail()