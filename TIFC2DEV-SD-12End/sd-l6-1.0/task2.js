// Task 2: listUsers()
import fs from "fs";
export function listUsers() {
    // Leer el archivo db.json
    fs.readFile('../SD-12-1 AssessmentServer-Individual/db.json', 'utf8', (err, data) => {
      if (err) {
        console.log("Error al leer db.json:", err);
        return;
      }
       // Parsear el contenido JSON y extraer los usuarios
    const db = JSON.parse(data);
    const users = db.users;

    // Imprimir la lista de usuarios
    console.log(users);
  });
}
listUsers();