// Un array de días de la semana 
const WEEKDAYS = [ 
    "Lunes", 
    "Martes", 
    "Miércoles", 
    "Jueves", 
    "Viernes", 
    "Sábado", 
    "Domingo", 
  ];
  
  for (let element in WEEKDAYS) { 
  console.log("El bucle está en la posición " + element);
  console.log("El día en la posición " + element + " es " + WEEKDAYS[element]);
    } 

 for (let element of WEEKDAYS) { 
    let weekend = (element === "Sábado" || element === "Domingo");

    if (weekend) { 
        console.log("It's a weekend!"); 
      } 
    }

 function workdayChecker(dayNumber) { 
    let workday = true 
   
      if (WEEKDAYS[dayNumber] === "Sábado" || WEEKDAYS[dayNumber] === "Domingo") { 
      workday = false;
    } 
   
    return workday 
  } 

  console.log("Hoy se trabaja?" + " " + workdayChecker(4))