// Task 3: addUser(first_name, last_name, email)



import fetch from 'node-fetch';

export function addUser(firstName, lastName, email) {
    fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName,
            lastName,
            email
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Nuevo usuario agregado:", data);
    })
    .catch(err => console.error("Error agregando usuario:", err));
}
