// Task 4: delUser(number)

export function delUser(userId) {
    const url = `http://localhost:3000/users/${userId}`; 

    fetch(url, {
        method: 'DELETE',
    })
    .then(response => {
        if (response.ok) {
            console.log(`Usuario con ID ${userId} eliminado con éxito.`);    
        } else {
            console.error(`Error al eliminar el usuario con ID ${userId}.`);
        }
    });
}

delUser(1);
