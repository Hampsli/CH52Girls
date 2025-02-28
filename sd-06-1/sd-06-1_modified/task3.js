// Type your code below this line!

function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
    
    this.printMail = function() {
      console.log (`${this.subject}: ${this.message} `);
    };
  }

let subject = process.argv[3];
let message = process.argv[4];

let email = new Mail(subject, message);
email.printMail();
 