function Alerta(){
    let listaA = document.querySelectorAll("a");
    let NumA= listaA.length;
    let Primer = listaA[0];
    let ultimo = listaA[NumA-1];


    alert(`Numero de enlaces ${NumA}, primer enlace: ${Primer.href}, ultimo enlace ${ultimo.href}`);
}