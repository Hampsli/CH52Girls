// Un array de días de la semana
//Cambio de constante a let 
let weekdays =[
    "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"
];
    // Problema 1: Bucles
    // Este bucle for se ejecutará una vez por cada elemento en el array WEEKDAYS.
    for (let day of weekdays) {
        console.log ("Hoy es "+ day);
    }

    // Problema 2: Ramas (Branches)
    // Este bloque de código verificará si cada elemento en el array WEEKENDS es sábado O domingo
    let weekend = false
    for (let day of weekdays){
        if (day === "Sábado" || day=== "Domingo"){
            weekend = true;
            break;
        }
    }

    if (weekend === true){
        console.log("Es fin de semana");
    }
    else {
        console.log("Es día laboral");
    }

    // Problema 3: Funciones
    // Esta función comprobará si un número de día de entrada corresponde a un día laborable
    
    function workdayChecker(dayNumber) {
        if (dayNumber <= 6|| dayNumber >= weekdays.length) {
            return "Número de día inválido";
        }
        let workday = true;
        if (weekday[dayNumber] === "Sabado" || weekdays[dayNumber] === "Domingo"){
            workday = false;
        }
        return workday;
    };