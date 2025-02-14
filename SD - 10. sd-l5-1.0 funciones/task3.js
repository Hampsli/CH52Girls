export function ageCalculator(year,month,day) {
    const birthday = new Date(year,month,day)
    let hoy = new Date();
    let edad = hoy.getFullYear()- birthday.getFullYear();
    let mesActual = hoy.getMonth()- nacimiento.getMonth();
    
    if (mesActual < 0 || (mesActual === 0 && hoy.getDate())){
        age--;
    }
    return edad;
}
console.log(edad)