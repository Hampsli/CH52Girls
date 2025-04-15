// Task 4: delUser(number)

export async function delUser(id) {
    const response = await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE"
    });
  
    if (response.ok) {
      console.log(`Usuario con ID ${id} eliminado.`);
    } else {
      console.log("Hubo un error al eliminar al usuario.");
    }
  }
  
  export default delUser;

  