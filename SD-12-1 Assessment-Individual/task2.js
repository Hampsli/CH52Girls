// Task 2: listUsers()
export function listUsers() {
    return fetch('http://localhost:3000/users') 
        .then(response => response.json())
        .then(data => {
            console.log(JSON.stringify(data));
        })
}

const listuser = listUsers()
