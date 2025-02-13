export function costCalculator(transaccion) {

    const monto = Number(transaccion);

    const total= monto + 3 + (monto * 0.01);

    return total;

}



