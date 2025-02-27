document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('showInfo'); //Busca un elemento HTML en la página que tenga el ID 'showInfo'. El resultado se almacena en la variable button.
  
    button.addEventListener('click', function() {  //Esta línea agrega un evento de clic al botón encontrado anteriormente. Cuando el botón se hace clic, se ejecuta la función dentro del evento.
      const links = document.querySelectorAll('a'); //Selecciona todos los elementos <a> (enlaces) en la página web y los almacena en la variable links. document.querySelectorAll('a')
      const firstLink = links[0];                   //Esta línea selecciona el primer enlace de la lista de enlaces encontrados y lo almacena en la variable firstLink.
      const lastLink = links[links.length - 1];     //selecciona el último enlace de la lista de enlaces encontrados y lo almacena en la variable lastLink. El índice links.length - 1 se utiliza porque los índices en JavaScript comienzan en 0.
  
      const message = `Número de enlaces: ${links.length}\n` +   //crea un mensaje que incluye información sobre los enlaces: numero, primer y ultimo enlace
                      `Primer enlace: ${firstLink.href}\n` +
                      `Último enlace: ${lastLink.href}`;
  
      alert(message);         //muestra una ventana emergente (alerta) con el mensaje creado anteriormente. Esto permite al usuario ver la información sobre los enlaces en la página.
    });
  });
  