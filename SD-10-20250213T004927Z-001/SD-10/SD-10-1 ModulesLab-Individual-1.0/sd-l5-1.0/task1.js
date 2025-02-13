export function costCalculator(transaccion) {
    const fixedFee = 3;
    const interestFee = 0.01;

    const costoTotal = transaccion + fixedFee + (interestFee*transaccion);
    return costoTotal;
    //return 128.24;
}