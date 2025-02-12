// Type your code below this line!

function Mail(subj, msg) {
    this.subject = subj
    this.message = msg

    let subject= process.argv[3]; 
    let message= process.argv[4]; 

    let email= new Mail(subject, message)
    
    this.printMail=function(){
      console.log(`${this.subject}: ${this.message}`);
    }
  }
  
//const newMail = new Mail( process.argv[3],process.argv[4] );

  // Type your code above this line!
  
