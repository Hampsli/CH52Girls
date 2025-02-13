//Given the net rent as input, this function calculates and returns the corresponding gross rent, including all additional fees, such as interest fees.

export function costCalculator(netRent) {
    let fee = 3;
    let interestfee = 0.01;
    const grossRent = netRent + netRent*interestfee + fee;
    return grossRent;

}

console.log(costCalculator(124))