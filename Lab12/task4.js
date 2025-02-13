// Task 4: delUser(number)

export function delUser(id) {
    fetch('http://localhost:3000/users/' + id, {
        method: "DELETE", //eliminar 
    })
}

delUser(6);