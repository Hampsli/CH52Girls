/**
 * Calcula la edad basada en una fecha de nacimiento.
 *
 * @param {number} year - El año de nacimiento.
 * @param {number} month - El mes de nacimiento (1-12).
 * @param {number} day - El día de nacimiento.
 * @returns {number} - La edad calculada.
 */
export function ageCalculator(year, month, day) {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day); // Los meses en JavaScript son 0-indexados.
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
  
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  }