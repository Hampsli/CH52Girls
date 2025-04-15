export function ageCalculator(year, month, day) {
    year = Number(year);
    month = Number(month);
    day = Number(day);
    
    const today = new Date();
    
    const birthDate = new Date(year, month - 1, day); 
    
    let age = today.getFullYear() - birthDate.getFullYear();
    
    if (today.getMonth() < birthDate.getMonth() || 
        (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
        age--; 
    }
    
    return age; 
}
const year = 2000;
const month = 12;
const day = 25;

const age = ageCalculator(year, month, day);

console.log(`La edad de alguien nacido el ${month}/${day}/${year} es: ${age}`);
