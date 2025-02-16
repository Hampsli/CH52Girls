// Task 4: delUser(number)
async function delUser(id){
    let idUrl = "http://localhost:3000/users" + "/" + id;
    fetch(idUrl, {
        method: 'DELETE'
    })
}

delUser(6);