export function ageCalculator(year, month, day) {
    //¿Qué día es hoy?
    const today = new Date(); //este tipo de objeto sirve para darme la fecha de hoy
    //formato de la fecha de cumpleaños, acorede con Date
    const birthDate = new Date(year, month - 1, day);//los meses se cuentan de 0 a 11
    //se calcula la edad
    let age = today.getFullYear() - birthDate.getFullYear();
    //se coloca un condicional para saber si ya pasó el cumpleaños o no
    const hasBirthdayPassed = (
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate())
    );
    if (!hasBirthdayPassed) {
        age--; // Restar 1 si aún no ha pasado el cumpleaños
    }

    return age
}
