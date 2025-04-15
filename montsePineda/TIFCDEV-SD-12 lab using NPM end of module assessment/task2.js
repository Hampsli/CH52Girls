/* Create and export a method to **print** a list of **users** from the JSON server.

* The `listUsers()` method should simply print the **entire** JSON response, containing the list of **users**, to the console. */

// Task 2: listUsers()

//Creamos la funcion que se exporta
export function delUser(id) {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE"
    })
    .then(response => response.text()) // Usamos .text() en lugar de .json()
    .then(() => {
      console.log(` Usuario con ID ${id} eliminado correctamente.`);
    })
    .catch(error => console.error(" Error:", error));
  }
  




/*Corrí en la terminal
sd-l6-1.0> node
Welcome to Node.js v22.13.1.
Type ".help" for more information.
> const { listUsers } = await import("./task2.js"); 
undefined
> listUsers();
undefined
> [
  {
    id: '1',
    first_name: 'Joshua',
    last_name: 'Diaz',
    email: 'j3@example.com'
  },
  {
    id: '2',
    first_name: 'Song',
    last_name: 'Gonzalez',
    email: 'sgo@example.com'
  },
  {
    id: '3',
    first_name: 'Milagro',
    last_name: 'Juarez',
    email: 'miljua23@example.com'
  },
  {
    id: '4',
    first_name: 'Olivia',
    last_name: 'Brown',
    email: 'olibrown432@example.net'
  },
  {
    id: '5',
    first_name: 'Alex',
    last_name: 'Chen',
    email: 'achen12@example.net'
  }
]
*/