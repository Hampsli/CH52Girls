// Task 3: addUser(first_name, last_name, email)
/* Create and export a method to **add** a new user to the JSON server.
    * The `addUser()` method should:
      * Take **3** inputs as follows: `addUser(<first_name>, <last_name>, <email>)`
      * Result in a complete new user being added to the JSON server with a **new, sequential, unique id number**.
        * For example: if the highest id number in the existing list is `4`, then this new id number should be `5`.*/

export async function addUser (first_name, last_name, email){
  //Usamos try como una buen práctica 
  //Por si fetch falla es capturado
     try {
      // se usa await porque fect es una función asincrona
      //por lo que si no se usa, el código prodria ejecutarse
      //sin que la respuesta este lista
  
      //la respuesta se guarda en l avariable url pero
      //aun no tiene un formato json
      const response = await fetch ('http://localhost:3000/users');
  
      //convertimos con ".json" por medio de una variable los datos del server a formato json
      const users  = await response.json();


      // encontrar el Id y generar uno nuevo 
      //se usa el .reduce para reducir los valores que hay en un array, es decir: 
      //filtrar los datos que hay y concentrar en trabajar solo en lo que se le indica
      //maxId es una función matematica que calcula el valor acumulado de los datos
      //Math.max función matematica que calcula el valor valor máximo entre 
      //user.id (el id del usuario actual) y maxId (el valor acumulado hasta el momento). Esto asegura que siempre estamos guardando el id más alto encontrado hasta ahora.
      const maxId = users.reduce ((maxId, user) => Math.max(user.id, maxId), 0);
      
      //creamos una nueva constante para guardar los datos 
      //del nuevo user, tomando en cuenta el último id del server
      //Para asegurarnos que sea el correcto, al máximo ID encontrado se le agrga un número
      const newId = maxId+1;

      //creamos un nuevo objeto o sea, un nuevo usuario
      const newUser = {
        //Se usa de esta forma para hacer referencia que debemos usar
        //la constante antes usada. para garantizar que cada usuario
        // tenga un id único y secuencial, evitando conflictos de ids duplicados.
        //El objeto newUser se enviara por medio de un método post al server
        id: newId,
        first_name,
        last_name,
        email
      };


      //AGREGAR EL NUEVO USARIO AL SERVER CON EL MÉTODO FETCH POST
      //1.Creamos la solicitud al server
      const addResponse = await fetch('http://localhost:3000/users', {
      //2. Usamos el método POST 
      //INICIA LA SINTAXIS DEL MÉTODO POST
      method: 'POST', // Especificamos el método HTTP POST para crear un nuevo recurso
      //Define los encabezados HTTP que queremos enviar con la solicitud.
      headers: {
        //Content-Type': 'application/json': especifica que el cuerpo de la solicitud contiene datos en formato JSON.
        'Content-Type': 'application/json' // Indicamos que el contenido es JSON
      },
      //body: define rl cuerpo de la solicitus; es decir los datos que estamos enviando al servidor
      //JSON.stringify(newUser): Convierte el objeto newUser a una cadena JSON. Y mandamos la instrucción en el cuerpo
      body: JSON.stringify(newUser) 
    });

    // Verificamos si la respuesta del servidor no es exitosa
    //.ok es una propiedad booleana que es true si el código de estado HTTP está en el rango 200-299 (significa que la solicitud fue exitosa), 
    //lo que indica una respuesta exitosa. Si no es true, significa que ocurrió un error.
    if (!addResponse.ok) {
      //El .ok nos indica si la respuesta fue exitosa (es una propiedad de solo lectura que contiene un booleano)
      // Lanzamos un error con el código y el mensaje de estado HTTP
      
      //throw se utiliza para lanzar excepcipnes o error
      //Es decir, creamos y lanzamos un nuevo error para informar de que algo salió mal.
      
      //Esto detiene el código dentro de try y pasa el control al bloque catch.
      //${addResponse.status} Este es el código numérico que indica qué tipo de error ocurrió (como 404 para "No encontrado" o 500 para "Error del servidor").
      // ${addResponse.statusText} Este es el texto que describe el error en palabras (como "Not Found" o "Internal Server Error").
      throw new Error(`HTTP error! Status: ${addResponse.status}, StatusText: ${addResponse.statusText}`);
    }

    // Si todo va bien, imprimimos en la consola el nuevo usuario añadido
    console.log("Usuario añadido:", newUser);
  } catch (error) {
    // Capturamos y manejamos cualquier error que ocurra en el bloque try
    console.error("Error al añadir el usuario:", error);
  }
}


//Instrucción para ñadir usuario desde el mismo código


addUser("Alan", "Maz", "martinez@example.com");






    
 