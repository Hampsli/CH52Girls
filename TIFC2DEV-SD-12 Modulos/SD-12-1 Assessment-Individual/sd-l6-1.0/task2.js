// Task 2: listUsers()
export function listUsers() {
  
    const url = 'http://localhost:3000/users'; 

    //Solicitud al servidor
    fetch(url)
        .then(response => response.json()) // Convertir la respuesta a formato JSON
        .then(data => {
            console.log("Lista de usuarios:", data); 
        })
}

listUsers();
