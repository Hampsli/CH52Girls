//Se esta creando una funciòn llamada "mail" que ayuda a hacer correos.
//Tiene 2 partes: el asunto (subject) y el mensaje (message)
//Queremos hacer un nuevo correo (newMail) con el asunto "Hello" y el mensaje "World"

//La funcion para crear un correo con asunto y mensaje:
function Mail(subj, msg) {  //Aqui se define la funciòn constructora llamada mail, que se usa para crear objetos con 2 propiedades: subject y message
    this.subject = subj     //Aqui se le asigna valor recibido en subj a la propiedad subject, es decir, guarda el asunto
    this.message = msg      //Aqui se le asigna valor recibido en msg a la propiedad message, es decir, guarda el mensaje
  }
  
  // Type your code below this line!
  //Funcion para crear un corre con hello en ausnto y world en mensaje
  const newMail = new Mail("Hello", "World" ) //El constructor mail tiene los valores de "Hello" "World" 
  
  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message) //Para imprimir el mensaje 