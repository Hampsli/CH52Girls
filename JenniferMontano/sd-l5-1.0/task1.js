export function costCalculator(cantidad) {
  const numCantidad = parseFloat(cantidad);
  const total = numCantidad + numCantidad * 0.01 + 3;
  return total.toFixed(2);
}
