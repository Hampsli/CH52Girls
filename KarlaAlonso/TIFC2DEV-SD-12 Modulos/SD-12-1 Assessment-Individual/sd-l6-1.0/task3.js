// Task 3: addUser(first_name, last_name, email)

export function addUser(userData) {
   
    const url = 'http://localhost:3000/users'; 

    
    fetch(url, {
        method: 'POST', // Método POST para agregar datos
        headers: {
            'Content-Type': 'application/json' //Encabezado solo si estamos enviando datos JSON
        },
        body: JSON.stringify(userData) //Convierte el objeto JS en una cadena JSON
    })
    .then(response => response.json()) 
    .then(data => {
        console.log("Usuario agregado:", data); 
    })
}

//Usuario agregado
const newUser = {
    id: 6, 
    first_name: 'Draco',
    last_name: 'Loera', 
    email: 'draco25@example.net'
};

// Llamar al método
addUser(newUser);


