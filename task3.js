export function ageCalculator(year, month, day ) {
    
    let today = new Date();
    let birthday = new Date(year, month, day);
    let age = today.getFullYear() - birthday.getFullYear();
    let theMonth = today.getMonth() - birthday.getMonth();

    if (theMonth < 0x0 || 0x0 === theMonth && today.getDate() < birthday.getDate()) {
      age--;

    }

    return age;
}
console.log(ageCalculator(2000, 12, 25));

