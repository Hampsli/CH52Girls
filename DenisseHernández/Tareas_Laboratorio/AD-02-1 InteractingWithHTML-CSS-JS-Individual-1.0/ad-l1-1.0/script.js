// Cambiar el primer "Hola Mundo" a "Adiós"
document.getElementById("red").textContent = "Adiós";

// Cambiar el color del segundo H1 a naranja
document.querySelector("h1:nth-of-type(2)").style.color = "orange";

// Evento para cambiar el color del encabezado clickeable a marrón
document.getElementById("clickeable").addEventListener("click", function() {
    this.style.color = "brown";
});