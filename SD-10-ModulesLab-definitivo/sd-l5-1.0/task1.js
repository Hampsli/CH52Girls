export function costCalculator(pay) {
    const fee = 3;
    const interestFee = 0.01;

    return pay + fee + (pay*interestFee);

}

console.log(costCalculator(124));