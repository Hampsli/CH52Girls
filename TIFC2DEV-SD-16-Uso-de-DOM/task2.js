function getFormvalue (event){
    event.preventDefault();
    const nombre = document.querySelector('input[name="fname"]').value;
    const apellido= document.querySelector('input[name="lname"]').value;
    console.log("Nombre: " + nombre + ", Apellido: " + apellido);

}