// Task 4: delUser(number)

export async function delUser(id) {
  try {
    //aqui enviamos la solicitud DELETE
    const deleteResponse = await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    });

    if (!deleteResponse.ok) {
      throw new Error(`Error al eliminar el usuario: ${deleteResponse.status}`);
    }

    console.log(`Usuario con ID ${id} eliminado correctamente.`);
  } catch (error) {
    console.error("Error:", error);
  }
}

//probando si sí elimina al usuario con id "3"
delUser(3);
