/* TASK 3
Create and export a method to **add** a new user to the JSON server.

* The `addUser()` method should:
  * Take **3** inputs as follows: `addUser(<first_name>, <last_name>, <email>)`
  * Result in a complete new user being added to the JSON server with a **new, sequential, unique id number**.
    * For example: if the highest id number in the existing list is `4`, then this new id number should be `5`.
*/

// Task 3: addUser(first_name, last_name, email)

export function addUser(first_name, last_name, email) {
    // Hacemos una solicitud GET para obtener la lista de usuarios
    fetch("http://localhost:3000/users")
        .then(response => response.json()) // Convertimos la respuesta en JSON
        .then(users => { // CReación del nuevo id
            
            /* users.length > 0 ? ... : 0 → Verifica si hay usuarios, Si users está vacío, asigna 0
            map() recorre cada usuario y extrae su id, creando un array de números 
            Math.max() encuentra el número más alto en una lista.
            ... (spread operator) convierte el array en argumentos individuales*/
            const highestId = users.length > 0 ? Math.max(...users.map(user => user.id)) : 0;
            const newId = highestId + 1;

            // Creamos objeto nuevo usuario para poder ingresar los datos
            const newUser = {
                id: newId,
                first_name: first_name,
                last_name: last_name,
                email: email
            };

            // Hacemos la solicitud POST para agregar el usuario
            return fetch("http://localhost:3000/users", {
                method: "POST",
                body: JSON.stringify(newUser),
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            });
        })
        // Convertimos la respuesta POST en JSON
        .then(response => response.json())
        // Imprimimos el usuario agregado
        .then(data => {
            console.log(" Usuario agregado:", data);
        })
        .catch(error => console.error("Error:", error)); // Maneja errores en la solicitud
}
