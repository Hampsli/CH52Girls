// Task 2: listUsers()

export function listUsers() {
    return fetch('http://localhost:3000/users') // Fetch request a manera de promesa a un url
        .then(response => response.json()) // Parse the JSON data from the response
        .then(data => {
            console.log(JSON.stringify(data)); //JSON.stringify()se usa para convertir un objeto o un valor en una cadena JSON.
        })
}
 
const test = listUsers()
listUsers();