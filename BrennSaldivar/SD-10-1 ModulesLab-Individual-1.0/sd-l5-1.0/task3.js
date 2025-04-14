
export function ageCalculator(year, month, day) {
    const today = new Date();
    const birthday = new Date(year + month + day)
    //obtener la edad calculando la diferencia de los años
    let age = today.getFullYear() - birthday.getFullYear()
    const todayMonth = today.getMonth()
    const birthdayMonth = birthday.getMonth()
}

