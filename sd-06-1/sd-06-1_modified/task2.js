function Mail(subj, msg) {
    this.subject = subj;
    this.message = msg;

    this.printMail = function() {
        console.log(`${this.subject}: ${this.message}`);
    };
}
let subject = process.argv[3];
let message = process.argv[4];

let email = new Mail(subject, message); // este crea el objeto
email.printMail();

/* NOTAS:
  process.argv
Cuando ejecutas un archivo JavaScript con Node.js, puedes pasarle valores desde la terminal. 
Estos valores se almacenan en un array llamado process.argv.
Aquí, process.argv contendrá:
  'hola', // process.argv[3] -> El subject
  'mundo' // process.argv[4] -> El message
Se pasa al constructor Mail y se crea un objeto con esos valores.
para ejecutarlo en la terminal se pone node index.js 2 hello world, para que imprima el subject y el message que se quiere*/

