const second = document.querySelectorAll(".second");
second.forEach(function(item) {
    item.style.color = "red";
});

const third = document.querySelectorAll("ol .third");
third.forEach(item => {
    item.style.color = "blue";
});

const contenedor = document.querySelector("#container");
contenedor.append("Hola!");

const main = document.createElement("main");
const footer = document.querySelector(".footer");
footer.append(main);

main.remove();

const lista = document.createElement("li");
lista.innerText = "four";

const ulist = document.querySelector("ul");
ulist.append(lista);
