// Task 4: delUser(number)

import axios from "axios";

const SERVER_URL = "http://localhost:3000/users"; 

const delUser = async (newId) => {
  try {
    
    const response = await axios.get(`${SERVER_URL}/${newId}`);
    
    if (!response.data) {
      console.log(`No se encontró un usuario con ID ${newId}`);
      return;
    }

    
    await axios.delete(`${SERVER_URL}/${newId}`);

    console.log(`Usuario con ID ${newId} eliminado con éxito`);
  } catch (error) {
    console.error(`Error al eliminar usuario:`, error.message);
  }
};


delUser(7);