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
        console.log("El bucle está en la posición "  + element);//quito comillas antes del console.log
        console.log("El día en la posición " + element + " es " + WEEKDAYS[element]) //meto este console.log al for para que lea a element-  // Error 1: ReferenceError: elemento no está definido
    }
  
    
    // Problema 2: Ramas (Branches)
    // Este bloque de código verificará si cada elemento en el array WEEKENDS es sábado O domingo
    for (let element in WEEKDAYS) {
        let weekend = false; //se define weekend como falso

        if (WEEKDAYS[element] === "Sábado" || WEEKDAYS[element] === "Domingo") { //aqui se hace la comparacion accediendo mediante el indice al elemento del array
            weekend = true;
        }
    "// Error 2: ReferenceError: weekend no está definido"
    
        if (weekend) {
            console.log("It's a weekend!")
        }
    }
    // Problema 3: Funciones
    // Esta función comprobará si un número de día de entrada corresponde a un día laborable
    function workdayChecker(dayNumber) {
        let workday = true;
        
        if (WEEKDAYS[dayNumber] === "Sábado" || WEEKDAYS[dayNumber] === "Domingo") {//Cambio de palabras a español
            workday = false;
        }

        return workday
    }
    let workday = workdayChecker(2) //Declaro a  workday
    // Error 3: ReferenceError: workday no está definido
    console.log(workday)