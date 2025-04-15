
document.getElementById("form1").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue

    const name = document.querySelector('input[name="fname"]').value;
    const apellido = document.querySelector('input[name="lname"]').value;

    console.log(`Nombre completo: ${name} ${apellido}`);
});