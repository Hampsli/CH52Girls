export function costCalculator(monto) {
    const tarifa = 3;
    const interes = monto * .01;
    let resultado = monto + tarifa + interes;
    return resultado
}

console.log(costCalculator(124));