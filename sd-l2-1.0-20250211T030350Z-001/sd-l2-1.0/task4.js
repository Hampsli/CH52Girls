const arr = [1,2,3,4,5,5,6,7,8,9,10,11,12,13,14]

// Type your code below this line!
//Para eliminar numeros duplicados, en este caso es el "5"
//indexOf(valor, desde); nos dice en qué posición está un número en el arreglo
//Si buscamos el 5, el primer 5 está en la posición 4:
//arr.indexOf(5); --> Devuelve 4
//Pero queremos encontrar el segundo 5, no el primero.Para eso, 
// le decimos a indexOf que busque después de la primera aparición:
//arr.indexOf(5, 5); --> Devuelve 5
//Ya que sabemos que el segundo 5 está en la posición 5, usamos splice() para eliminarlo:
//arr.splice(5, 1);
//Donde:
//5 → Es la posición del número que queremos borrar.
//1 → Significa "borra solo un número".

const index = arr.indexOf(5, arr.indexOf(5) + 1);
if (index !== -1) {
    arr.splice(index, 1);
}
// Type your code above this line!

arr.forEach(element => console.log(element))