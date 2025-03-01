// Función que se ejecuta cuando se envía el formulario
function getFormvalue(event) {
    // Prevent the default form behavior (page reload)
    event.preventDefault();
  
    // Lama los valores
    const firstName = document.querySelector('#first').value;
    const lastName = document.querySelector('#last').value;
  
    console.log(firstName);
    console.log(lastName);
  }
  

  const button = document.querySelector("#button");
  button.addEventListener("submit", getFormvalue);
  