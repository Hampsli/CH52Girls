// Task 2: listUsers()
//2. El método listUsers() debería simplemente imprimir la respuesta JSON completa, que contiene la lista de usuarios, en la consola.
export function listUsers() {
    fetch("http://localhost:3000/users", {method:"GET"}) //Esta función se usa para hacer solicitudes HTTP. En este caso, estamos haciendo una solicitud para obtener datos de la URL. El metodo GET es para pedir datos al servidor.
      .then(response => response.json()) //Esto se ejecuta cuando la solicitud fetch se completa con éxito. response.json() convierte la respuesta en un objeto JSON.
      .then(data => console.log(data )) //Aquí estamos tomando los datos convertidos a JSON y los estamos imprimiendo en la consola.
      .catch(error => console.error('Error al obtener usuarios:', error)); //Si ocurre un error durante la solicitud fetch, este bloque lo captura y lo imprime en la consola con un mensaje de error.
  }
console.log(listUsers());
