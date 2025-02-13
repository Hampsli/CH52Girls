export function rubricPassFail() {
    
        if (calif >= 5) {
            return "Pasa";
        } else {
            return "Falla";
        }
}
let calif = process.argv[3];
let resultado = rubricPassFail(calif);
console.log(resultado);