//SCRIPT 
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
for (let element of WEEKDAYS) {
    console.log("El bucle está en la posición " + element)
    console.log("El día en la posición " + WEEKDAYS.indexOf(element) + " es " + element)
}

// Problema 2: Ramas (Branches)
// Este bloque de código verificará si cada elemento en el array WEEKENDS es sábado O domingo
let weekend = true
for (let element of WEEKDAYS) {

    if (element === "Sábado" || element === "Domingo") {
    
        console.log("It's a weekend!")
        if (weekend === true) {
            console.log("It's a weekend!")
        }
    } 
}    



// Problema 3: Funciones
// Esta función comprobará si un número de día de entrada corresponde a un día laborable


function workdayChecker(dayNumber) {
    let workday = true
     if (WEEKDAYS[dayNumber] === "Saturday" || WEEKDAYS[dayNumber] === "Sunday") {
        
        console.log(workday)

        workday=false;
    }

    return workday
}


let workday = workdayChecker(4);
console.log(workday);


