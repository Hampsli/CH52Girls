export function rubricPassFail() {

}

export function rubricPassFail(puntuacion) {
    if (puntuacion === 11) return "Perfect";
    if (puntuacion > 8) return "Excellent";
    if (puntuacion >= 5) return "Pass";
    return "Fail";
}