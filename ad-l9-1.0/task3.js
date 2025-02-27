function  linksInfo(){
    const link = document.querySelectorAll("a");
    const numLink = link.length;
    const primerLink = link[0].href;
    const ultimoLink = link[numLink - 1].href;

    alert(`Número de enlaces en el sitio: ${numLink}, Primer enlace: ${primerLink}, Ultimo enlace: ${ultimoLink}`);
}

const button = document.querySelector("#linksInfo");
button.addEventListener("click",linksInfo);