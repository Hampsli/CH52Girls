// Task 3: addUser(first_name, last_name, email)
import {listUsers} from '/task2.js';

async function addUser(first_name, last_name, email){
    const users = listUsers();

    fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify({
          id: users.lenght++,
          first_name: first_name,
          last_name: last_name,
          email: email
        }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8"
        }
      })
      
}

addUser("ana", "banana","anabananaminionlover@gmial,com")
