export function costCalculator() {
    const tarifaFija = 3;  
    const tarifaInteres = 0.01; 

    const interes = cantidad * tarifaInteres;
    const totalPago = cantidad + interes + tarifaFija;
  
    return totalPago;
}

const cantidad = parseFloat(process.argv[3]);

console.log(`El costo total es: $${cantidad.toFixed(2)}`);