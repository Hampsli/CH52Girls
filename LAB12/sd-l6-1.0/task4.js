/*4. Create and export a method to **delete** a user from the JSON server.
    * The `delUser()` method should:
      * Take an **id** number as input as follows: `delUser(<id>)`
      * Result in the user matching that **id** number being deleted from the JSON server. */

// Task 4: delUser(number)

export async function delUser(id) {
// Se usa (id) como parametro porque vamos a trabajar SOLO sobre este parametro 
    //Usamos try como una buen práctica 
    //Por si fetch falla es capturado
       try {
        // se usa await porque fetch es una función asincrona
        //por lo que si no se usa, el código prodria ejecutarse
        //sin que la respuesta este lista
    
        //Realiza una solicitud HTTP a la URL especificada usando el método fetch.
        const delResponse = await fetch(`http://localhost:3000/users/${id}`, {
        //${id}` La URL incluye el id del usuario que queremos eliminar, para apuntar al recurso específico en el servidor.
       
        // DELETE se utiliza para eliminar un recurso del servidor.
        method: 'DELETE'

    //Cierra el objeto de configuración y la llamada a fetch    
    });

    //// Verificamos si la respuesta del servidor no es exitosa
    //.ok es una propiedad booleana que es true si el código de estado HTTP está en el rango 200-299 (significa que la solicitud fue exitosa), 
    //lo que indica una respuesta exitosa. Si no es true, significa que ocurrió un error.
    if (!delResponse.ok) {
      throw new Error(`HTTP error! Status: ${delResponse.status}, StatusText: ${delResponse.statusText}`);
    }

    console.log(`Usuario con id ${id} eliminado`);
  } catch (error) {
    console.error("Error al eliminar el usuario:", error);
  }
}

delUser(1);





