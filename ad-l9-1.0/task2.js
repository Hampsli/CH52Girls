function getFormValue(event) {
    event.preventDefault(); // Evita que el formulario se envíe
    var nombre = document.getElementsByName("fname")[0].value;
    var apellido = document.getElementsByName("lname")[0].value;
    console.log("Nombre: " + nombre);
    console.log("Apellido: " + apellido);
}