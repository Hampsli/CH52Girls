export function addUser(first_name, last_name, email) {
    const url = 'http://localhost:3000/users';
    const data = {
        //Datos que se enviarán en la petición
        first_name: first_name, 
        last_name: last_name,
        email: email
    };
    fetch(url, {
        method: "POST", //Método POST para realizar la petición a la URL del servidor
        headers: {
            "Content-Type": "application/json" //Se especifica el formato en el que se enviarán los datos al servidor
        },
        body: JSON.stringify(data) //Se convierte el objeto en formato JSON para enviarlo en la solicitud HTTP
    })
    .then(response => response.json()) //Extrae el contenido JSON de la respuesta HTTP
    .then(data => {
        console.log("User added successfully:", data); //Manejar los datos de la respuesta
    })
    .catch((error) => {
        console.log("Error adding user:", error); //Envía un mensaje en caso de error
    });
}

//addUser("Morrito", "Swift", "morritoswift@travis.com"))

/*Pendientes: 
Unificar funciones para utilizar los mismos métodos*/
