/*export function ageCalculator() {

}*/

export function ageCalculator(year, month, day) {
    const birthDate = new Date(year, month - 1, day); // Restamos 1 al mes porque los meses empiezan desde 0
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}