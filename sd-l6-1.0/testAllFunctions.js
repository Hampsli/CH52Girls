// Importamos todas las funciones de las tareas
import { getServerURL } from './task1.js';
import { listUsers } from './task2.js';
import { addUser } from './task3.js';
import { delUser } from './task4.js';

// 1. Probar getServerURL() - Debe devolver la URL del servidor
console.log("Server URL:", getServerURL());

// 2. Probar listUsers() - Imprimir lista de usuarios
console.log("Listado de usuarios:");
listUsers();

// 3. Probar addUser() - Agregar un nuevo usuario
console.log("Agregando un nuevo usuario...");
addUser("Carlos", "Martínez", "carlos.martinez@example.com");

// 4. Probar listUsers() nuevamente para ver si el usuario fue agregado
console.log("Listado de usuarios después de agregar uno nuevo:");
listUsers();

// 5. Probar delUser() - Eliminar un usuario por ID (por ejemplo, ID = 5)
console.log("Eliminando el usuario con ID 5...");
delUser(5);

// 6. Probar listUsers() nuevamente para ver si el usuario fue eliminado
console.log("Listado de usuarios después de eliminar uno:");
listUsers();
