//const arr = [1,2,3,4,5,5,6,7,8,9,10,11,12,13,14]
// Type your code below this line!
// Type your code above this line!
//arr.forEach(element => console.log(element))

//MIS NOTAS
//metodo splice: permite eliminar y/o modificar (agregar) el array
// El número 5 está duplicado, se elimina el número 5 de la posición 4.
//ejemplo [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14], aquí hay un numero repetido
let arr = [1,2,3,4,5,5,6,7,8,9,10,11,12,13,14]; 
arr.splice(4, 1);

arr.forEach(num => {
    console.log(num);
});

/*No utilizar console.log(arr) porque imprime el array con corchetes y comas.
Usa arr.forEach(num => console.log(num)) para imprimir cada número en su propia línea.*/