// Task 3: addUser(first_name, last_name, email)

import axios from "axios";

const SERVER_URL = "http://localhost:3000/users"; 

const addUser = async (firstName, lastName, email) => {
  try {
    
    const response = await axios.get(SERVER_URL);
    const users = response.data;

    
    const newId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;

    
    const newUser = {
      id: newId,
      firstName,
      lastName,
      email
    };

    
    await axios.post(SERVER_URL, newUser);

    console.log("Usuario agregado con éxito:", newUser);
  } catch (error) {
    console.error("Error al agregar usuario:", error.message);
  }
};


addUser("Itzel", "Padilla", "padillaitzel090@gmail.com");