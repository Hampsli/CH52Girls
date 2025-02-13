//This ageCalculator function accurately calculates a person's age based on their birth date.

export function ageCalculator(year, month, day) {
    let presentYear = 2025;
    let presentMonth = "February"
    let presentDay = 12;
    //let presentTime = Date();
    let age
    //const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    if (month === presentMonth && day === presentDay){
        age = presentYear - year
    } else {
        age = presentYear - year - 1
    }
    //console.log("Successful")
    return age;
}

console.log(ageCalculator(2000, "March", "12"));
//console.log(ageCalculator(1998, "Noviembre", 5));

/*PENDIENTE:
- Utilizar Date() para capturar la fecha exacta al momento de la ejecución
- Informar cuántos días faltan para el cumpleaños 
- Utilizar números para la fecha en vez del nombre del mes*/
