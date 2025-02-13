export function costCalculator(cantidad) {
    const transaccion = 3;
    const tasadeInteres = 0.01;

    const costoTotal = cantidad + transaccion + (cantidad * tasadeInteres);
    return(costoTotal); // Muestra el resultado del costo total en la consola
}

    const cantidadEjemplo = 107;
    const costoFinal = costCalculator(cantidadEjemplo);
    console.log(costoFinal)