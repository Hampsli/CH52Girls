export function costCalculator(trans) {
    let costo = trans*1.01 + 3;
    return costo;
}
let transaccion= 124;
costCalculator(transaccion);
console.log(costCalculator(transaccion));