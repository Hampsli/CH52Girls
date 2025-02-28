function js_style() {
     /* document.getElementById(): Selecciona el elemento (párrafo) por su ID
     busca el elemento que tiene id="text" en el 
     documento HTML y guarda una referencia 
     a ese elemento en la variable element. 
     Esta referencia permite luego manipular
    el elemento seleccionado*/

     var element = document.getElementById("text");


     // Cambia el estilo del párrafo
     // "element. hace referencia a qué todo lo que este en la variable se va a modificar 
    element.style.fontFamily = "Garamond, serif"; // Cambia la fuente
    element.style.fontSize = "30px"; // Cambia el tamaño de la fuente
    element.style.color = "green"; // Cambia el color del texto
}
