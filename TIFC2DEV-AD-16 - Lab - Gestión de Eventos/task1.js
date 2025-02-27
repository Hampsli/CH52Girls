
/*Modify the style of the paragraph text through JavaScript code.
By clicking on the button, the font, font size, and colour of the paragraph text should change. */

//Creamos una función que cambie el stilo del parrafo
function styleParagraph (){
    //primero buscamos el texto que es un parrafo <p> con su id
    const text = document.querySelector("#text");
    //Se cambia el font, tamaño y color
    text.style.fontFamily= "Courier New, monospace";
    text.style.fontSize = "24px";
    text.style.color= "red";
    console.log(text);
}
//Luego la llamamos con el botón para que funcione al hacer click, por medio de su id
const buttonStyle = document.querySelector("#jsstyle");
//hacemos que el boton escuche el evento del click y ejecute la funcion de cambio de estilo, no olvidar que "click" es el evento a escuchar por lo que debe ser puesto
buttonStyle.addEventListener("click",styleParagraph);

