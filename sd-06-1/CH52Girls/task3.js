//const arr = [1,2,3,4,5,6,7,9,10,11,12]
// Type your code below this line!
// Type your code above this line!
//arr.forEach(element => console.log(element))


//MIS NOTAS
//metodo splice: permite eliminar y/o modificar (agregar) el array
// En la lista hace falta el número 4 en la posición 3 (se empieza a contar de 0)
let arr = [1,2,3,4,5,6,7,9,10,11,12]; 
arr.splice(7, 0, 8);

console.log(arr);

arr.forEach(num => {
    console.log(num);
});

/*No utilizar console.log(arr) porque imprime el array con corchetes y comas.
Usa arr.forEach(num => console.log(num)) para imprimir cada número en su propia línea.*/