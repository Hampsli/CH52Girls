function showLinkInfo() {
    let links = document.getElementsByTagName("a");
    let numberOfLinks = links.length;
    let firstLink = links[0] ? links[0].href : "No hay enlaces";
    let lastLink = links[links.length - 1] ? links[links.length - 1].href : "No hay enlaces";

    alert("Número de enlaces: " + numberOfLinks + 
          "\nPrimer enlace: " + firstLink + 
          "\nÚltimo enlace: " + lastLink);
}
