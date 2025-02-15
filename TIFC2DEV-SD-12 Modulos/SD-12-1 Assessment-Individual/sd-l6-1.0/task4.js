// Task 4: delUser(number)

export function delUser(userId) {
    const url = `http://localhost:3000/users/${userId}`; 

    // Hacer la solicitud DELETE al servidor para eliminar al usuario
    fetch(url, {
        method: 'DELETE', // Método DELETE para eliminar el usuario
    })
    .then(response => {
        if (response.ok) {
            console.log(`Usuario con ID ${userId} eliminado con éxito.`);
            
            listUsers();  // Mostrar la lista actualizada después de la eliminación
        } else {
            console.log(`Error al intentar eliminar el usuario con ID ${userId}.`);
        }
    })
    .catch(error => {
        console.log(`Error en la solicitud de eliminación: ${error}`);
    });
}

// Llamar al método para eliminar un usuario con ID 6 (por ejemplo)
delUser(6);
