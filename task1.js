/**
 * Calcula el pago total de una transacción, aplicando:
 * - Una comisión fija de $3.
 * - Una comisión de interés del 1% sobre el monto de la transacción.
 *
 * @param {number} amount - El monto de la transacción.
 * @returns {number} - El total a pagar.
 */
export function calculatePayment(amount) {
    return amount * 1.01 + 3;
  }