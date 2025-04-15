export function rubricPassFail(puntuacion) {
    if (puntuacion >=5) {
        return "Pasa";

    }else{
        return "Falla";
    }
}
console.log(rubricPassFail(6));
console.log(rubricPassFail(4));