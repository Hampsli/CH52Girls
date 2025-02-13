export function rubricPerfect() {
    
}

export function rubricPerfect(puntuacion) {
    if (puntuacion === 11) return "Perfect";
    if (puntuacion > 8) return "Excelent";
    if (puntuacion >= 5) return "Pass";
    return "Fail";
}
