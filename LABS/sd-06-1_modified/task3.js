// Type your code below this line!

const from = process.argv[3]
const to = process.argv[4]

function Mail(subj, msg) {
    this.subject = subj;
    this.message = msg;
    this.printMail = function (){
      console.log( `${subj}: ${msg}`);
  }
}
  const newMail = new Mail();
  
  // Type your code above this line!
  
  newMail.printMail()