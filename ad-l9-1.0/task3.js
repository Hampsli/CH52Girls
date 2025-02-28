function showLink() {
    const links = document.querySelectorAll("a");
    const firstLink = links[0].href;
    const lastLink = links[links.length -1].href; 
alert("Numero de links" + links.length + "\nPrimer link:" + firstLink + "\nUltimo link" + lastLink);
}

const boton = document.querySelector("li a[href='#links']");
boton.addEventListener("click", showLink);


