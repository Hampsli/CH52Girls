// Obtiene y muestra en consola la lista de usuarios almacenados en el servidor JSON.

export async function listUsers() {
  const url = "http://localhost:3000/users"; //URL donde se encuentra la lista de usuarios en el servidor JSON
  //let users = [];
  
  try {
    const response = await fetch(url); //Hace una solicitud HTTP al servidor con la URL especificada
    //Verifica si la respuesta es exitosa o no
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`); //Lanza un error si la respuesta no es válida
    }
    const users = await response.json(); //Convierte la respuesta a formato JSON para poder manejar los datos
    console.log(users); //Imprime la lista de usuarios en la consola
  } catch (error) {
    console.error("Error getting users:", error); //Muestra el error en consola

  }
}
listUsers().then(() => console.log("Users listed successfully")); //Muestra el resultado en la consola

