export function costCalculator(amount) {
    const floatamount = parseFloat(amount)
    const interest = floatamount * 0.01; //Calcula el interes que es el 1%
    const total = floatamount + interest + 3; //Suma la tarifa de $3 y el interes
    return total;
}

console.log(costCalculator(300))