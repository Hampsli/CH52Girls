export function costCalculator(transaction) {
    const fee = 3;
    const interest = 0.01;
    const transactionAmount = transaction +  fee + (transaction * interest);
    console.log(transactionAmount); 
}

costCalculator(124)