/* 3. Write a function to show an alert with information about links.
Clicking on the button should display the number of links on the page, 
the first link in the page, and the last link in the page.
*/

//1. crear el botón en el HTML
//2. Crear función 
function infolink() {
//2.1 Obtener la información (links) y guardarlos en una variable
var links = document.getElementsByTagName ("a");

//2.2 Contar el número de links y  guardarlo en una variable con la propiedad 
/* (nombre de la variable) + .length 
.length es una propiedad que se utiliza para obtner longitud de algo:
número de elemntos (array)
número de carcateres (string)
número de elementos en una colección HTML*/
var numlinks = links.length;

//2.3 Obtener el primer link  y guardarlo en una variable 
/* Usaremos la propiedad (nombre de la variable que deseamos usar)[indice del elemnto que queremos usar].href
.href se usa para obtener o establecer el valor dentro de un atributo de un enlace <a> </a> o de una etiqueta de enlace >link>
Define la URL A LA QUE APUNTA EL ENLACE
Támbien se puede usar para cambiar la URL de un enlace
ejemplo:

<a id="miEnlace" href="https://example.com">Visita Example.com</a>
var enlace = document.getElementById("miEnlace"); // Obtén el enlace por su ID.
enlace.href = "https://nueva-url.com"; // Establece una nueva URL.

Para este caso se usa el número cero, porque queremos saber cuál es el primer link*/ 
var firstlink = links[0].href; 

//2.4 Ubicar el íltimo enlace y lo guardamos en una variable
// Usamos [links.length - 1] porque la propiedad length de un arreglo o colección devuelve 
//el NÚMERO total de elementos en ese arreglo o colección.
var lastlink = links[links.length - 1].href;


//ALERTA 
alert( 
    "Número de enlaces:" + numlinks + "\n" +
    "Primer enlace" + firstlink + "\n"+
    "Último link" + lastlink + "\n"
);

}