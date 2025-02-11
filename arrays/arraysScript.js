// 

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
  console.log("El bucle está en la posición " + element) 
/*ERROR
console.log tiene " al inicio, se hace uso de for in que reccorre los indices dle arreglo
  for(let element in WEEKDAYS){
    console.log("El bucle está en la posición" + element);
    } */
  
    } 
// Error 1: ReferenceError: elemento no está definido 
console.log("El día en la posición " + element + " es " + WEEKDAYS[element]) 
/*ERROR element está definido unicamente dentro de for*/

// Problema 2: Ramas (Branches) 
// Este bloque de código verificará si cada elemento en el array WEEKENDS es sábado O domingo 
for (let element in WEEKDAYS) { 

    if (element === "Sábado" || element === "Domingo") { 
    let weekend = true 
  } 
 
"// Error 2: ReferenceError: weekend no está definido" 

  if (weekend === true) { 
    console.log("It's a weekend!") 
  } 
} 
/*ERROR weekend solo existe dentro del if, se tendría que usar return weekend para poder utilizar su resultadi
 if (element === "Sábado" || element === "Domingo") { 
    let weekend = true 
    return weekend
  } 
*/ 


// Problema 3: Funciones 
// Esta función comprobará si un número de día de entrada corresponde a un día laborable 
function workdayChecker(dayNumber) { 
  let workday = true 
 
    if (WEEKDAYS[dayNumber] === "Saturday" || WEEKDAYS[dayNumber] === "Sunday") { 
    workday = false 
  }
  return workday 
} 
 
workdayChecker(4) 
 
// Error 3: ReferenceError: workday no está definido 
console.log(workday) 

/*ERROR
workday no esta definido, no se imprime y está mal escrito el if 
     if (WEEKDAYS[dayNumber] === "Saturday" || WEEKDAYS[dayNumber] === "Sunday") { 
    workday = false 
    }else{workday=true}
*/ 
