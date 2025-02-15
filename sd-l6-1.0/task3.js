// Task 3: addUser(first_name, last_name, email)

function addUser(primer_nombre, apellido, correo_electrónico){
    let lastID= Math.max(...usuarios.map(usuario => usuario.id));
    let data = {
        id: lastID+1,
        primer_nombre: primer_nombre,
        apellido: apellido,
        correo_electrónico: correo_electrónico
 }
}