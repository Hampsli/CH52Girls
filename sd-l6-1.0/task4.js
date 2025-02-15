// Task 4: delUser(number)

// task4.js
import fetch from 'node-fetch';

export function delUser(id) {
    fetch(`http://localhost:3000/users/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        console.log(`Usuario con ID ${id} eliminado`);
    })
    .catch(err => console.error("Error eliminando usuario:", err));
}
