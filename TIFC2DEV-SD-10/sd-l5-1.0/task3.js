export function ageCalculator(año, mes, dia) {
   
    let hoy = new Date();  
    let nacimientoFecha = new Date(año, mes - 1, dia); 
    let edad = hoy.getFullYear() - nacimientoFecha.getFullYear(); 
    
    if (hoy.getMonth() < nacimientoFecha.getMonth() || (hoy.getMonth() === nacimientoFecha.getMonth() && hoy.getDate() < nacimientoFecha.getDate())) {
        edad--;
    }

    return edad;
}

const año = parseInt(process.argv[2]);
const mes = parseInt(process.argv[3]);
const dia = parseInt(process.argv[4]);

const edad = ageCalculator(año, mes, dia);

console.log(`Tu edad es: ${edad}`);

