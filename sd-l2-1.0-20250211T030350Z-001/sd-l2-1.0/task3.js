const arr = [1,2,3,4,5,6,7,9,10,11,12]

// Type your code below this line!
//Para insertar el numero que falta en el array, en este caso es "8", 
//La formula es la siguiente: array.splice(índice, cantidad_a_eliminar, elemento_a_insertar);
//Donde:
    /*índice = La posición donde queremos insertar o eliminar elementos.
    cantidad_a_eliminar = Cuántos elementos se van a eliminar desde esa posición.
    elemento_a_insertar = El nuevo elemento que queremos agregar en esa posición.*/
    arr.splice(7, 0, 8);

// Type your code above this line!

arr.forEach(element => console.log(element))