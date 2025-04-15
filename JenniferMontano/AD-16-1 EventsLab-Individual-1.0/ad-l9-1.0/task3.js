// la siguiente linea explica que cuando se envie el formulario se ejecute la funcion getFormvalue
document.addEventListener("DOMContentLoaded", function () {
  // Espera a que el DOM esté cargado
  let links = document.getElementsByTagName("a"); // Captura los enlaces iniciales
  let totalLinks = links.length;
  let firstLink = totalLinks > 0 ? links[0].href : "No hay enlaces";
  let lastLink = totalLinks > 0 ? links[totalLinks - 1].href : "No hay enlaces";

  function showLinkInfo() {
    alert(
      `Número de enlaces: ${totalLinks}\n` +
        `Dirección del primer enlace: ${firstLink}\n` +
        `Dirección del último enlace: ${lastLink}`
    );
  }

  let button = document.createElement("button");
  button.innerText = "Mostrar información de los enlaces";
  button.onclick = showLinkInfo;
  document.body.appendChild(button);
});
