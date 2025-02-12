// Type your code below this line!
function Journey (start, end){
    this.start=start;
    this.end=end;
}
// Obtener subject y message desde los argumentos de ejecución
const sujeto = process.argv[3];  // El tercer argumento (después de "node", "index.js" y el número de tarea)
const mensaje = process.argv[4];  // El cuarto argumento

// Verificar que el usuario haya proporcionado ambos argumentos
if (!sujeto || !mensaje) {
  console.log("Error: Debes proporcionar un asunto y un mensaje.");
  console.log("Uso: node index.js <task_number> <subject> <message>");
  process.exit(1); // Salir con código de error
}
/* 
const prompt = require('prompt-sync')();
const from =prompt("Desde: ");
const to = prompt("Hasta: ") 
*/
// Type your code above this line!

const travel = new Journey(sujeto, mensaje)

console.log("Booking a taxi from " + travel.start + " to " + travel.end + ".")