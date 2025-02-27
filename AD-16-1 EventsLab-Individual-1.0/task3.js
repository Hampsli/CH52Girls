function linkAlert(){
    const links = document.querySelectorAll("a")
    const firstlink = links[0].href;
    const lastlink = links[links.length -1].href;
    alert("Número de enlaces: " + links.length + "\nPrimer enlace: " + firstlink + "\nUltimo enlace: " + lastlink);
    
}

const button = document.querySelector("li a[href = '#links']");
button.addEventListener("click", linkAlert);