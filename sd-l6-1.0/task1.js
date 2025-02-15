//1. El método getServerURL() debería devolver la URL de su servidor JSON en funcionamiento.
// task1.js
export function getServerURL() {    //Export: Para que la funcion getServerURL se pueda ocupar en otros archivos. function getServerURL: Se define la funcion getServerURL
    return "http://localhost:3000"; // Return: asegura que devolvera un valor. Es la URL del servidor 
  } //Aqui se cierra la funcion
  
console.log(getServerURL()); //console.log para imprimir la funcion getServerURL (el valor del getServerURL)



