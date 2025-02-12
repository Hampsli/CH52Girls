// Type your code below this line!

function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
    
    //Metodo para imprimir el correo 
    this.printMail = function() {  //En "this.printMail" se crea una nueva propiedad para el objeto que estamos creando con el constructor Mail. La parte "=function" estamos asignando a esa propiedad (printMail) una funcion. Esta funcion se ejecuta cuando se llame a printMail() en culauier objeto creado con Mail.
      console.log(this.subject + ": " + this.message);
  };
}

  const userSubject = process.argv[3]; //toma el tercer argumento que se pasa a la ejecución. Este es el asunto.
  const userMessage = process.argv[4]; //toma el cuarto argumento, que es el mensaje.
  const newMail = new Mail(userSubject, userMessage); //Se esta creando un nuevo objeto "Mail" con lo que ingreso el usario
  
  // Type your code above this line!
  
  newMail.printMail()  //Para imprimir el correo