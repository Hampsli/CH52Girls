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
     //****Definir element fuera del for
    let element;
    for ( element  in WEEKDAYS) {
        console.log("El bucle está en la posición " + element)  //*****Comilas en el inicio y espacio del tabulador
    }
    // Error 1: ReferenceError: elemento no está definido
    console.log("El día en la posición " + element + " es " + WEEKDAYS[element])
    // Problema 2: Ramas (Branches)
    // Este bloque de código verificará si cada elemento en el array WEEKENDS es sábado O domingo
    let weekend; //**** Defini weekend fuera del for para poder usarlo
    for (let element in WEEKDAYS) {
        if (element === "Sábado" || element === "Domingo") {
            weekend = true
    }
    "// Error 2: ReferenceError: weekend no está definido"
    if (weekend === true) {
        console.log("It's a weekend!")
    }
    }
    // Problema 3: Funciones
    // Esta función comprobará si un número de día de entrada corresponde a un día laborable
 function workdayChecker(dayNumber) {
    let workday = true
     if (WEEKDAYS[dayNumber] === "Saturday" || WEEKDAYS[dayNumber] === "Sunday") {
            workday = false
    }
    return workday
}

// Error 3: ReferenceError: workday no está definido
console.log(workdayChecker(4)) //***** agregue workdayChecker dentro del console