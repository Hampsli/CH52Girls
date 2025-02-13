// Task 4: delUser(number)

export function addUser(id){
    fetch('http://localhost:3000/users/'+id, {
        method:'DELETE',
    })
}
addUser('3460')
