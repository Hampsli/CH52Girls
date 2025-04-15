const arr = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12];

// Type your code below this line!

arr.splice(7, 0, 8); // 7 es la posición en la que insertaremos el número 8, el 0 que no queremos eliminar ningún elemento, u 8 es el número que
// insertaremos en dicha posición

// Type your code above this line!

arr.forEach((element) => console.log(element));
