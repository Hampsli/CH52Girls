export function ageCalculator(anio, mes, dia) {
    const fechaDeNacimiento = new Date(anio, mes - 1, dia);
    const fechaActual = new Date();

    let edad = fechaActual.getFullYear() - fechaDeNacimiento.getFullYear();

    const mesActual = fechaActual.getMonth();
    const diaActual = fechaActual.getDate();

    if (
        mesActual < fechaDeNacimiento.getMonth() ||
        (
            mesActual === fechaDeNacimiento.getMonth() &&
            diaActual < fechaDeNacimiento.getDate()
        )
    ) {
        edad--;
    }

    return edad;
}