  
// Función que calcula el costo total
export function costCalculator(amount) {
    const amountNumber = Number (amount);
    const fee = 3;
    const interest = amountNumber * 0.01;
    const total = amountNumber + fee + interest;
    return total.toFixed(2); // Redondeamos a 2 decimales
};

