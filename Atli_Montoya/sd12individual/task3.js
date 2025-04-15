// Task 3: addUser(first_name, last_name, email)
import { getServerURL } from "./task1.js";

export async function addUser (firstName, lastName, email){
    const newUser = {
        first_name: firstName,
        last_name: lastName,
        email: email
    };

    try {

    const response = await fetch(getServerURL() + "/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
    
        },
        body: JSON.stringify(newUser)
    });

    if (response.ok) {
        const addedUser = await response.json();
        console.log("Nuevo usuario agregado:", addedUser);
      } else {
        console.error("Error al agregar el usuario.");
      }
    } catch (error) {
      console.error("Hubo un problema con la solicitud:", error);  
    }
  }





