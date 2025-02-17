export function ageCalculator(year, month, day) {
    let today = new Date();
    let birthdDate = new Date(year, month, day);

    let age = today.getFullYear() - birthdDate.getFullYear();
   
    return age;

}
const friendAge = new ageCalculator();
console.log (friendAge);