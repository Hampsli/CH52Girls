export function costCalculator(pago) {
pago = Number (pago)
const tarifa = 3;
const interes = 0.01;
return pago + tarifa + (pago * interes)
}