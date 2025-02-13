
// export function ageCalculator(year, month, day) {
//     year = Number(year);
//     month = Number(month);
//     day = Number(day);
    
//     // Validate inputs
//     if (isNaN(year) || isNaN(month) || isNaN(day) || month < 1 || month > 12 || day < 1 || day > 31) {
//         throw new Error("Invalid date input");
//     }
    
//     const birthDate = new Date(year, month - 1, day); // Aquí se crea un objeto Date (fecha) a partir de los valores de año, mes y día. Recuerda que en JavaScript, los meses empiezan desde 0, por lo que si el usuario ingresa 1 para enero, debemos restarle 1 para que sea 0 (es decir, January).
//     if (birthDate.getFullYear() !== year || birthDate.getMonth() !== month - 1 || birthDate.getDate() !== day) {
//         throw new Error("Invalid date");
//     }
    
//     const today = new Date();
    
//     let age = today.getFullYear() - birthDate.getFullYear();
//     const monthage = today.getMonth() - birthDate.getMonth();
//     const dayage = today.getDate() - birthDate.getDate();
    
//     // Adjust age if birthday hasn't occurred yet this year
//     if (monthage < 0 || (monthage === 0 && dayage < 0)) {
//         age--;
//     }
    
//     return age;
// }

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

    // Crear la fecha del cumpleaños de este año
    const birthdayThisYear = new Date(today.getFullYear(), month - 1, day);

    // Si el cumpleaños aún no ha pasado este año, restar 1 a la edad
    if (today < birthdayThisYear) {
        age--;
    }

    return age;
}


const myage = ageCalculator(1996, 9, 7);
console.log(myage)


