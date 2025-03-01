function info() {
    //obtiene todos los elementos <a> que se encuentran en el documento
    const anchor1 = document.querySelectorAll("a");

    // Calcular el número total de enlaces en la página
    const listItems = anchor1.length;
    const item1 = anchor1[0].href;
    const itemN = anchor1[anchor1.length - 1].href;

    // Mostrar la información en una alerta
    alert(`Numero de enlaces: ${listItems}\nEl primer enlace es: ${item1}\nEl ultimo enlace es: ${itemN}`);
}
