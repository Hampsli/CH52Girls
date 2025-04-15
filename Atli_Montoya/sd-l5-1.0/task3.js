export function ageCalculator(year, month, day) {
let today = new Date ();
let birthDate = new Date (year, month -1, day);


let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();
    let dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
}

return age
}