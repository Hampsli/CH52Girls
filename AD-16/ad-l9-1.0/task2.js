function getFormvalue(event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    let firstName = document.getElementsByName("fname")[0].value;
    let lastName = document.getElementsByName("lname")[0].value;

    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    
    alert("First Name: " + firstName + "\nLast Name: " + lastName);
}
