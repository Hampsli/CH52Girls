function showLinkInfo() {
    const links = document.getElementsByTagName("a"); // Obtener todos los enlace, es <a> porque es donde estan en el html
    const numLinks = links.length; // Contar los enlaces

    // Obtener el primer y último enlace
    //investigue esto porque no sabia como hacerlo y descubri que 
    // ?. se utiliza para evitar errores si un valor no existe, entonces si no existe mandaria el mensaje
    const firstLink = links[0]?.href || "No hay enlaces"; //entonces si existe lo toma
    // `${}` se utiliza para instertar variables dentro de un string sin concatenar 
    //es mas facil de leer que + blabla + 
    const lastLink = links[numLinks - 1]?.href || "No hay enlaces"; // igual busca el ultimo, si existe lo toma 

    alert(`Número de enlaces: ${numLinks}\nPrimer enlace: ${firstLink}\nÚltimo enlace: ${lastLink}`);// esta es nuestra ventana de alerta 
}

// Asignamos la función al botón
document.getElementById("infoButton").addEventListener("click", showLinkInfo);
