/* 2. Write a JavaScript function to get the values 
    of First and Last name from the form.
    By clicking on the button, 
    the names should be printed to the console.
*/

function getFormvalue() {

    // Evita que el formulario se envíe 
    // y la página se recargue
    //Complementario a form
    event.preventDefault();

    // Obtén el formulario por su ID y lo guarda en la variable form 
    //para poder modificar lo que hay dentro
    var form = document.getElementById("form1");
    
    // Obtén los valores de los campos de entrada y los guarda en una variable
    /* (nombre de la variable).elements[].value: obtiene el valor del 
    campo de entrada*/
    //.elements[].value: de un formulario devuelve los elementos de control del formulario 
    // y se puede acceder a un elemento especifico por medio de su nombre 
    var firstName = form.elements["fname"].value;
    var lastName = form.elements["lname"].value;
    
    // Imprime los valores en la consola
    console.log("First name: " + firstName);
    console.log("Last name: " + lastName);
}

