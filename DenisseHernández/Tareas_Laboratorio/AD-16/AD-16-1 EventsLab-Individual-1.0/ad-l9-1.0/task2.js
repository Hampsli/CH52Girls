function getFormvalue(event) {
    event.preventDefault(); // Evita que el formulario se envíe y la página se recargue.

    // Obtener los valores de los inputs
    const firstName = document.querySelector('input[name="fname"]').value;
    const lastName = document.querySelector('input[name="lname"]').value;

    // Imprimir en la consola
    console.log("Nombre:", firstName);
    console.log("Apellido:", lastName);
}

// Asignar la función al evento submit del formulario
document.getElementById("form1").addEventListener("submit", getFormvalue);
