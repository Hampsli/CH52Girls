// Task 2: listUsers()

import fetch from 'node-fetch';  

export function listUsers() {
    fetch("http://localhost:3000/users")
        .then(response => response.json())
        .then(data => {
            console.log(data);  // Muestra la lista completa de usuarios
        })
        .catch(err => console.error("Error fetching users:", err));
}

