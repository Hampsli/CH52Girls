function js_style(){
// Vamos a obtener el Id para poder trabajar primero
    let paragraph = document.getElementById("text");

    // cuanto ya esta llamado ya podemos cambiar el estilo del parrafo 
    paragraph.style.fontFamily =" Arial, sans-serif"; // cambiamos nuestra fuente 
    paragraph.style.fontSize = "20px"; // cambiamos el tamaño
    paragraph.style.color = "purple"; // le damos el color 
}
