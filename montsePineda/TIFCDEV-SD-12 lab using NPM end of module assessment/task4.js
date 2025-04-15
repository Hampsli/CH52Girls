/* task 4
Create and export a method to **delete** a user from the JSON server.

* The `delUser()` method should:
  * Take an **id** number as input as follows: `delUser(<id>)`
  * Result in the user matching that **id** number being deleted from the JSON server. */
// Task 4: delUser(number)

export function delUser(id) {
  // Hacemos la solicitud DELETE para eliminar el usuario con el ID dado
  fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE"
  })
  .then(response => response.json())
  .then(() => {
      console.log(` Usuario con ID ${id} eliminado correctamente.`);
  })
  .catch(error => console.error(" Error:", error)); // Maneja errores en la solicitud
}

const { delUser } = await import("./task4.js");









/* Para probar si se esta corriendo bien el código debo llamr a la función después de que ya lo hcie 
function name {} function*(
()
Y después en la terminal
node task1.js  

Funciones asincronas debo usarlar para el fetch 
Para no usar el await y funciones asincronzas para el fetch 
debo usar el .then y todo eso 


qué es esto
npm install node-fetch


Buscar git ignore
*/
