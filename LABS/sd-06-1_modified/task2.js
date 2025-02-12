function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
  }
  
  // Type your code below this line!
  
const sujeto = process.argv[3]; 
const mensaje = process.argv[4];  

if (!sujeto || !mensaje) {
  console.log("Error: Debes proporcionar un asunto y un mensaje.");
  console.log("Uso: node index.js <task_number> <subject> <message>");
  process.exit(1);
}
  const newMail = new Mail( sujeto, mensaje )
  
  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message)