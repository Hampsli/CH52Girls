export function rubricPerfect(puntaje) {
    if (puntaje === 11) {
        return "Perfect";
    } else if (puntaje >= 9) {
        return "Excellent";
    } else if (puntaje >= 5) {
        return "Pass";
    } else {
        return "Fail";
    }
}

    console.log(rubricPerfect(11)); 