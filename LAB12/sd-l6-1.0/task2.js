// Task 2: listUsers()
/* Create and export a method to **print** a list of **users** from the JSON server.
    * The `listUsers()` method should simply print the **entire** JSON response, 
containing the list of **users**, to the console.
*/
export async function listUsers() {
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
   
    console.log (users); 
   
} catch (error) {
    //se usa el catch error para mantener controlado el error, 
    // es decir, si existe un error desde el API el catch bloque se encarga de imprimir el error en la consola. 
    //Además se usa en combinacion con try
    console.error("Error al obtener los usuarios:", error);
  }
}

   
console.log(listUsers());


