// Task 4: delUser(number)
import { getServerURL } from "./task1.js";

export async function delUser(id) {
    const response = await fetch(getServerURL() + "/users/" + id, {
      method: "DELETE"
    });
    
    if (response.ok) {
        console.log(`Usuario con ID ${id} eliminado exitosamente.`);
      } else {
        console.error(`Error al eliminar el usuario con ID ${id}.`);
      }
    }