// Task 3: addUser(first_name, last_name, email)


export function addUser(first_name, last_name, email) {
    fetch('http://localhost:3000/users', {
        method: "POST",//agregrar,
        headers: {
            "Content-Type": "application/json"//especificando que se mandara un json
        },
        body: JSON.stringify({//POST simpre va con body
            first_name: first_name , last_name: last_name ,email: email      
        })
    })
    
}

addUser('Kai','Nathaniel', 'kai.n@example.org')