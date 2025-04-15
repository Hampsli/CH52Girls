export function rubricPassFail(calificacion) {
    if (calificacion >= 5) {
        return "Pass";
    } else {
        return "Fail";
    }
}

console.log(rubricPassFail(7)); 