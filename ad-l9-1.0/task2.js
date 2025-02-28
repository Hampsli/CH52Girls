function writeComment(event) {
// Para evitar que el formulario se envíe y recargue la página
event.preventDefault();

// Obtener los valores de los campos de nombre y apellido
const name = document.querySelector("input[name='fname']").value;
const lastName = document.querySelector("input[name='lname']").value;

// Imprimir los valores en la consola
console.log("First Name: " + name);
console.log("Last Name: " + lastName);
}

// Seleccionar el formulario y el botón de envío
const form = document.querySelector("#form1");
const button = document.querySelector("input[type='submit']");
// Agregar un evento 'submit' al formulario
form.addEventListener("submit", writeComment);
