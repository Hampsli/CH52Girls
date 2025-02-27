function estiloTexto(){
    let texto = document.getElementById("text");
    texto.style.fontFamily = "Georgia,serif";
    texto.style.fontSize = "50px";
    texto.style.color = "pink";
}

const button = document.querySelector("#jsstyle");
button.addEventListener("click",estiloTexto);