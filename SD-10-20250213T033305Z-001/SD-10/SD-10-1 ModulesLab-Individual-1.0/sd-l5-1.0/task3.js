export function ageCalculator(year, month, day) {
    const birthDate = new Date (year, month - 1, day );
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate())){
        age--;

    }

    return age;
}
const age = ageCalculator(2000, 12, 25);
console.log(age);