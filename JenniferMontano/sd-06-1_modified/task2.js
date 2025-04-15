function Mail(subj, msg) {
  this.subject = subj;
  this.message = msg;
}

// Type your code below this line!

const subject = process.argv[3];
const message = process.argv[4];
const newMail = new Mail(subject, message);

// extraemos los valores de subject y message desde
// process.arg[3] y process.argv[4]
// ejecutamos el programa con node index.js 2 Hello World
// node[0] index.js[1] 2[2] Hello[3] World[4]

// Type your code above this line!

console.log(newMail.subject + ": " + newMail.message);
