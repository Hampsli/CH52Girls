/**You have been presented with a constructor for a Mail object.
    * Modify the code so that the user provides their own subject and message as execution parameters in that order.
    * Then, extend the constructor to include a printMail() method that prints the following to the Console:
        * `<subj>: <msg>`
        * For example, if the two inputs are `hello` and `world`, then the output should be `hello: world`. */

// Type your code below this line!

function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
    this.printMail = function(){
      console.log(`${this.subject}: ${this.message}`);
    }
    
  }
  
  let subj = process.argv[3];
  let msg = process.argv[4];
    
  const newMail = new Mail(subj, msg);
   
  
  // Type your code above this line!
  
  newMail.printMail();