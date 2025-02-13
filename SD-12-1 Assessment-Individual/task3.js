// Task 3: addUser(first_name, last_name, email)
export function addUser(first_name, last_name, email){
    fetch('http://localhost:3000/users', {
        method:'POST', //el metodo post siempre lleva body
        headers: {
            "Content-Type": "application/json; charset=UTF-8" //le estamos especificando al servidor que le estamos enviando un json, a traves del body
        },
        body: JSON.stringify({
            first_name: first_name,
            last_name: last_name,
            email: email,
    })
    })
}
addUser('Kai', 'Nathaniel', 'kai.n@example.org')
