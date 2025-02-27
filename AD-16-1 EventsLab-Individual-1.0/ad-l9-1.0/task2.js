function getFormvalue() {  //Esta función se ejecutará cuando se envíe el formulario, gracias al atributo onsubmit en el tag <form> del HTM
    // Prevenir que el formulario se envíe realmente
    event.preventDefault();
  
    // Obtener los valores de los campos del formulario
    const firstName = document.querySelector('input[name="fname"]').value;
    const lastName = document.querySelector('input[name="lname"]').value;
  
    // Mostrar los valores obtenidos
    console.log(`Nombre: ${firstName}`);
    console.log(`Apellidos: ${lastName}`);
  

  }
  