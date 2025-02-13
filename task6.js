export function rubricExcellent() {
    
}

export function rubricExcellent(puntuacion) {
    if (puntuacion === 11) return "Perfect";
    if (puntuacion > 8) return "Excelent";
    if (puntuacion >= 5) return "Pass";
    return "Fail";
}
