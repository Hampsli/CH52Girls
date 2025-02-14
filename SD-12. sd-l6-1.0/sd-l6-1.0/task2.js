// Task 2: listUsers()

export function listUsers() {
    return fetch('http://localhost:3000/users') // Fetch data from API
        .then(response => response.json()) // Parse the JSON data from the response
        .then(data => {
            console.log(JSON.stringify(data)); // Return the parsed data (array of users)
        })
}

const listuser = listUsers()
console.log(listuser)