// Función para calcular la edad
export function ageCalculator(year, month, day) {
    const today = new Date(); // Fecha actual
    const birthDate = new Date(year, month - 1, day); // Fecha de nacimiento
    let age = today.getFullYear() - birthDate.getFullYear(); // Años de diferencia

    // Ajustar si aún no ha pasado el cumpleaños este año
    if (
        today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    return age;
};