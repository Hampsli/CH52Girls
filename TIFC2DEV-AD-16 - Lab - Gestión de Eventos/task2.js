/* Write a JavaScript function to get the values of First and Last name from the form.
By clicking on the button, the names should be printed to the console. */

/*Ya que se se tiene el onsubmit en el html, que es es un atributo de eventos en HTML que se utiliza para ejecutar una función JavaScript cuando un formulario se envía (cuando el usuario hace clic en el botón de submit o presiona Enter). */
//El onsubmit envia el formulario al servidor por lo que se hará una función que evita que el formulario sea enviado automaticamente antes de hacer clic en submit

//se crea la función que se llama en el html
function getFormvalue(event){
    event.preventDefault(); //preventDefault es lo que hace que no se envie automaticamente el form

    //Se inserta el valor de name en la constante name por medio de querySelector, que en lugar de usar, id clase o etiquete se accede 
    //seleccionando el campo de entrada cuyo atributo name es fname, lname y de este se obtiene su valor
    const name = document.querySelector("[name='fname']").value;
    const lastName =document.querySelector("[name='lname']").value;

    console.log(name, lastName)
}
//Como el onsubmit ya se está llamando a la función ya no es necesario llamarla aquí y alla con el onsubmit hace que al hacer click se ejecute la función