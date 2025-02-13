export function ageCalculator(year, month, day) {
    const birthDate = new Date(year, month - 1, day); // Los meses en JavaScript son desde 0
    const today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear(); //Esta línea calcula la edad de una persona en función de la fecha de nacimiento (birthDate) y la fecha actual (today).today.getFullYear() obtiene el año actual.
    const m = today.getMonth() - birthDate.getMonth(); //today.getMonth() obtiene el mes actual (de 0 a 11).
  
    return age;
  }