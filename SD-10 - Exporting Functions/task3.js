export function ageCalculator(año, mes, dia) {
    //encerramos el dia de hoy que va cambiando
    const hoy = new Date(); 
    const fechaNacimiento = new Date(año, mes - 1, dia); // meses en JS van de 0 a 11

    // NOS vamos apoyar de metodos ya existentes de GET
    // de ellos nos trae ciertos valores de una fecha
    // getFullYear nos trael el a;o completo en 4 cifras
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear(); // Diferencia de años

    // Verificar si ya pasó el cumpleaños este año
    //y con getMotnth nos trae el mes
    // hay otra condicion que nos dice Si estamos en el mismo mes de nacimiento, 
    // pero el día actual aún no ha llegado, significa que aún no ha cumplido años.
    if (
        hoy.getMonth() < fechaNacimiento.getMonth() || 
        (hoy.getMonth() === fechaNacimiento.getMonth() && hoy.getDate() < fechaNacimiento.getDate())
    ) {
        edad--; // Restar 1 si el cumpleaños aún no ha pasado
    }

    return edad;
}

//
// console.log(ageCalculator(2000, 12, 25)); 
