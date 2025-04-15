document.getElementById("byebye").innerHTML="Adios";
document.getElementById("byebye").style.color="orange";

//crea la constante para el elemento que dice cambio de color a café
const holaMundo = document.createElement("h2");
holaMundo.textContent = "Cambio de color a café";
document.body.appendChild(holaMundo);

// Función para cambiar el color a marrón al hacer clic
holaMundo.addEventListener("click", function () {
    this.style.color = "brown";
});