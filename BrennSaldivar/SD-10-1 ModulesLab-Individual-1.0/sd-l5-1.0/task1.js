export function costCalculator(transacción) {
    const amount = parseFloat(transacción)
    const fee = 3; 
    const interest = 0.01;  

    
    const total = amount + fee + (amount * interest);

    return total

    }

    

