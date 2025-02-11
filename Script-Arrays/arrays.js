// Un array de días de la semana
const WEEKDAYS = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo"
    ]
    // Problema 1: Bucles
    // Este bucle for se ejecutará una vez por cada elemento en el array WEEKDAYS.
    for (let element in WEEKDAYS) {
        console.log("El bucle está en la posición ", element)
        console.log("El día en la posición ", element, " es ", WEEKDAYS[element])
        }

// FOR .. IN itera sobre los indices del Arreglo
    

    // Este bloque de código verificará si cada elemento en el array WEEKENDS es sábado O domingo
    
// FOR ... OF itera sobre los valores del Arreglo
    for (let elemento of WEEKDAYS) {
        if (elemento == "Sábado" || elemento == "Domingo") {
            console.log("It's a weekend!");
        } else {
            console.log("Aun no es fin de semana!");
        }
    }
// Problema 3: Funciones
// Esta función comprobará si un número de día de entrada corresponde a un día laborable
function workdayChecker(dayNumber) {
let workday = true
if (WEEKDAYS[dayNumber] === "Sábado" || WEEKDAYS[dayNumber] === "Domingo") {
workday = false
}
return workday
}
let workday= workdayChecker(4);
// Error 3: ReferenceError: workday no está definido
console.log(workday)