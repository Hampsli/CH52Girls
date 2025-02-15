// Task 3: addUser(first_name, last_name, email)


export async function addUser(firstName, lastName, email) {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email
      })
    });
  
    const newUser = await response.json();
    console.log(newUser);
  }
  
  export default addUser;
