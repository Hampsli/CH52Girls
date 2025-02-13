export function ageCalculator(year, month, day) {
    // Convert inputs to numbers
    year = Number(year);
    month = Number(month);
    day = Number(day);

    // Crear fechas
    const birthDate = new Date(year, month - 1, day); // El mes es 0-based en JS Date
    const today = new Date();

    // Calcular la edad inicial
    let age = today.getFullYear() - birthDate.getFullYear();
    
    // Calcular diferencia de meses y días
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    // Crear la fecha del cumpleaños de este año
    const birthdayThisYear = new Date(today.getFullYear(), month - 1, day);

    // Si el cumpleaños aún no ha pasado este año, restar 1 a la edad
    if (today < birthdayThisYear) {
        age--;
    }

    return age;
}

console.log(ageCalculator(2000, 12, 25)); 
  
    