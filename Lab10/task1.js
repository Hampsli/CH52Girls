export function costCalculator(cantidad) {
 let cantidadConDecimales = parseFloat (cantidad)
 let interes = cantidadConDecimales * 0.01;
 let total = cantidadConDecimales + interes +3;
 return total;
}

console.log(costCalculator(300));
