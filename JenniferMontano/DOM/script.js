document.createElement("p");
/*Este metodo nos permite crear un nuevo elemento p*/
// document.createElement("p");
//Almacenamos este <p> nuevo en una variable
const paragraph = document.createElement("p");
//Vamos anexar este <p> nuevo en nuestro body
document.body.append(paragraph);
//modificar el texto interior de elementos HTML individuales´
//Estamos utilizando el atributo innerText de <p>
paragraph.innerText = "Nuestro nuevo P";
//Js puede seleccionar elementos indivudales del DOM
//utilizando el metodo querySelector -> es buscar elementos que coincidan con la cadena
const header = document.querySelector("h1");
//Utilizaremos un console.log pra visualizar el valor de la variable header
console.log(header);

//Con la propia innherit
header.innerText = "Nuevo titulo";
//obtener todos los elementos que coincidan con la cadena
//se usa querySelectorAll
//Esto nos devolvera un NodeList
//Un NodeList es un objeto que representa una coleccion de nodos
const varray = document.querySelectorAll("p");
//Utilizaremos un console.log para visualizar el valor de la variable varray
console.log(varray);

//Podemos modificar el texto interior de todos los elementos <p> de nuestro NodeList
varray[0].innerText =
  "Ahora podemos modificar el texto de todos los elementos <p> del DOM";
//utilizamos metodos document.querySelector y document.querySelectorAll
//para seleccionar elementos del DOM
//y modificar su contenido
const anchor1 = document.createElement("a");
anchor1.href = "https://www.google.com";
anchor1.innerText = "<a> Google";

//dentro de las lineas anteriores escritas nos permite crear un nuevo elemento <a> y asignarle un href y un texto

const listItems = document.querySelectorAll("li");
listItems[0].append(anchor1);

//modificaremos el estilo css desde JS
const icon = document.querySelector("#icon");
icon.style.height = "1.2em";

//eliminar elementos del html desde el DOM
//utilizaremos el método remove() que remueve un elemento HTML
const ul = document.querySelector(".links");
ul.remove();
