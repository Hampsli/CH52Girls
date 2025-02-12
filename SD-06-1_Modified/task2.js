function Mail(subj, msg) {
  this.subject = subj;
  this.message = msg;
}

// Nos apoyaremos de Node y el metodo argv
//lo que se le asigna a las variables estara definido segun
// process.argv[0] es node
// process.argv[1] es task2.js o como se llame nuestro archivo
// process.argv[2] es el numero 2 que significa el numero de tareas a ejecutar en este casa dos variables
// process.argv[3]  y process.argv[4] ya corresponden a nuestras variables de subject y message que queremos
const subject = process.argv[3]; // Tercer argumento (índice 3)
const message = process.argv[4]; // Cuarto argumento (índice 4)

//Se crea un nuevo objeto con nuestros parametros definidos
const newMail = new Mail(subject, message);

console.log(newMail.subject + ": " + newMail.message);
