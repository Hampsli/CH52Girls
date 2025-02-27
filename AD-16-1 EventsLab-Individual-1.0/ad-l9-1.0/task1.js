function js_style() {  //La función js_style() se llama cuando se hace clic en el botón.
    // Selecciona el párrafo
    const parrafo = document.getElementById('text');

    if (parrafo) {
        // Cambia el tamaño de la fuente
        parrafo.style.fontSize = '24px'; // Puedes cambiar el tamaño según tus necesidades

        // Cambia el color del texto
        parrafo.style.color = 'blue'; // Puedes cambiar el color según tus necesidades

        // Cambia la fuente (si deseas)
        parrafo.style.fontFamily = 'Arial'; // Puedes cambiar la fuente según tus necesidades
    } else {
        console.error('No se encontró el párrafo con el ID "text".');
    }
}
