export function costCalculator( transaccion) {
    let trans = Number(transaccion);
    const tarifa = 3;
    const interes = 0.01;

    const costo = trans +  tarifa + (trans * interes);
    return Number(costo.toFixed(2));
 
}

