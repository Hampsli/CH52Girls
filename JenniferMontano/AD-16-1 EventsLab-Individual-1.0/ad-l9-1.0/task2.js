function getFormvalue(event) {
  event.preventDefault(); //para que no se recargue la pagina
  //let es para declarar variables
  let form = document.getElementById("form1"); //obtenemos el formulario
  let firstName = form.elements["fname"].value; //obtenemos el valor del input con el nombre fname
  let lastName = form.elements["lname"].value; //obtenemos el valor del input con el nombre lname
  //console.log es para imprimir en consola

  console.log("Nombre:", firstName);
  console.log("Apellido:", lastName);
}
