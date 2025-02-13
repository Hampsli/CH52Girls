export function rubricExcellent(puntaje) {
    if (puntaje >= 9) {
        return "Excellent";
    } else if (puntaje >= 5) {
        return "Pass";
    } else {
        return "Fail";
    }
}

    console.log(rubricExcellent(10)); 