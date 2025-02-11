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
        console.log("El día en la posición " + element + " es " + WEEKDAYS[element]);
    }
    // CORREGIDO Error 1: ReferenceError: elemento no está definido. Se quito del string el console.log y integro al bucle para definir element.
    
    // Problema 2: Ramas (Branches)
    
    // Este bloque de código verificará si cada elemento en el array WEEKENDS es sábado O domingo
    
    let weekend = ''
    for (let element in WEEKDAYS) {
        if (WEEKDAYS[element] === "Sábado" || WEEKDAYS[element] === "Domingo") {
            weekend = true
            console.log(WEEKDAYS[element], "It's a weekend!")
        } else {
            console.log(WEEKDAYS[element])
        }
    }
    // CORREGIDO Error 2: ReferenceError: weekend no está definido"
  
    // Problema 3: Funciones
    // Esta función comprobará si un número de día de entrada corresponde a un día laborable
   
    function workdayChecker(dayNumber) {
        let workday = true
        if (WEEKDAYS[dayNumber] === "Sábado" || WEEKDAYS[dayNumber] === 'Domingo') {
            workday = false;
            console.log(WEEKDAYS[dayNumber], 'Not a workday')
        } else {
            console.log(WEEKDAYS[dayNumber], 'Is a workday')
        }
    }
    workdayChecker(6)
    // Corregido Error 3: ReferenceError: workday no está definido