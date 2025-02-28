/* Write the code that will do the following:
 - 4.1 Select the section with a container id.
 - 4.2 Select all the items list with a class of "second".
 - 4.3 Select a list item with a class of third, but only the list item inside of the ol tag.
 - 4.5 Give the text "Hello!" to the section with a container id.
 - 4.6 Add the main class to the div with a footer class.
 - 4.7 Remove the main class on the div with a footer class.
 - 4.8 Create a new li element.
 - 4.9 Give the li the text "four".
 - 4.10 Append the li to the ul element.*/
 
 //4.1
 var containersection = document.getElementById("container");

 //4.2
 var class2 = document.getElementsByClassName("second");

 //4.3
 /* querySelector es un método del objeto document que 
 devuelve el primer elemento que coincide con el selector especificado. 
 Si no se encuentra ningún elemento que coincida, devuelve null.*/
 var itemol3 = document.querySelector(" ol .third");

 //4.5
 containerSection.textContent = "Hello!";

 //4.6 
 var footerDiv = document.querySelector(".footer");
 footerDiv.classList.add("main");

 //4.7 
 var newLi = document.createElement("li");


 //4.8
 newLi.textContent = "four";

 //4.9
 var ulElement = document.querySelector("ul");
 ulElement.appendChild(newLi);