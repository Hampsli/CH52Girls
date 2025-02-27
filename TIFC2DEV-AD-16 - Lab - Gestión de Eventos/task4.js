/* Task 4: Write the code that will do the following:

- Select the section with a container id.
- Select all the items list with a class of "second".
- Select a list item with a class of third, but only the list item inside of the ol tag.
- Give the text "Hello!" to the section with a container id.
- Add the main class to the div with a footer class.
- Remove the main class on the div with a footer class.
- Create a new li element.
- Give the li the text "four".
- Append the li to the ul element. */

//Seleccionamos los elmentos co id container
const container = document.querySelectorAll("#container");
//Seleccionamos los elementos con clase second
const second = document.querySelectorAll(".second");
//Seleccionamos el elemento de las lista ol con clase third
const thirdOl = document.querySelector('ol[#third]');
//Give the text "Hello!" to the section with a container id.
thirdOl.innerText = "Hello!";


