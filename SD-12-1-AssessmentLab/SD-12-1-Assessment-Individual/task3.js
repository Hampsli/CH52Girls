export function addUser(first_name, last_name, email) {
    const url = 'http://localhost:3000/users';
    const data = {
        first_name: first_name, 
        last_name: last_name,
        email: email
    };
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Success:", data);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
}

console.log(addUser("Morrito", "Swift", "morritoswift@travis.com"))
