export function rubricExcellent(i) {
    if (i >= 9) {
        return "Excelente";
    } else if (puntuacion >= 5) {
        return "Pasa";
    } else {
        return "Falla";
    }
}

let calif = process.argv[3];
let rubric = rubricExcellent(Number(calif))
console.log(rubric);
