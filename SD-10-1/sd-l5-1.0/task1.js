/*export function costCalculator() {

}*/
export function calculatePayment(transactionAmount) {
    const fee = 3; // Tarifa fija de transacción
    const interestRate = 0.01; // 1% de interés
    const interest = transactionAmount * interestRate;
    return transactionAmount + fee + interest;
}