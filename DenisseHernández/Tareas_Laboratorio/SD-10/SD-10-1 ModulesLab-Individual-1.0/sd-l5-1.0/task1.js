export function costCalculator(pago) {
// una operacion 
// por transanccion + 3 peso
// suma interes 0.01 

// meto transaccion  
// hacer una funcion para exportar el valor a pagar 
// meter numero y sacar

/* 1.- declarar:  pago, Operaciones (operacion ocupare tarifa y tarifa con interes)  
2.- exportar los resultados fuera de export )*/
    const tarifa = 3;
    const tarifaInteres = 0.01;
    return pago + tarifa + (pago * tarifaInteres);
}
console.log(costCalculator(124));
