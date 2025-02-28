function mostrarInformacionEnlaces() {
    var enlaces = document.getElementsByTagName("a");
    var numEnlaces = enlaces.length;
    var primerEnlace = enlaces[0].href;
    var ultimoEnlace = enlaces[numEnlaces - 1].href;

    alert(
        "Número de enlaces: " + numEnlaces + "\n" +
        "Primer enlace: " + primerEnlace + "\n" +
        "Último enlace: " + ultimoEnlace
    );
}