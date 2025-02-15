// Task 1: getServerURL()
//1. Create and export a method to **return** the **URL** of the server from the SD-12-1: AssessmentServer-Individual project.
//* The `getServerURL()` method should **return** the URL of your running JSON server.


//Este código devuelve la URL del servidor JSON
export function getServerURL() {
    const host = "localhost"; //Escribe el host 
    const puerto = "3000"; //Escribe el puerto en el que se encuntra tu servidor

    //Regresa la URL completa 
    //Usamos concatenación
    return `http://${host}:${puerto}`;
}

console.log ("La URL es" + ":"+ getServerURL()); 
//Función que permite exportar el método y
//usarlo en cualquier otra parte del método

//Como usar la función export
 
