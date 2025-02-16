// Task 2: listUsers()
async function listUsers(){
    const usersList = await fetch("http://localhost:3000/users");
    const usersJson = await usersList.json();
    console.log(usersJson)
    return usersJson
}

listUsers();
module.exports=listUsers;