const itemsContainer = document.querySelector("#list-items");

function addItem(item) {
  const colourCard = document.createElement("section");
  colourCard.className = "card w-75";
  itemsContainer.append(colourCard);

  const colourCardBody = document.createElement("article");
  colourCardBody.className = "card-body";
  colourCard.append(colourCardBody);

  const colourCardTitle = document.createElement("h5");
  colourCardTitle.className = "card-title";
  colourCardTitle.innerText = item.name;
  colourCardBody.append(colourCardTitle);

  const colourCardText = document.createElement("p");
  colourCardText.className = "card-text";
  colourCardText.innerText = item.pantone_value;
  colourCardBody.append(colourCardText);

  const colourCardColour = document.createElement("figure");
  colourCardColour.style = "background-color: " + item.color + ";";
  colourCardColour.innerText = item.color;
  colourCardBody.append(colourCardColour);

  const colourCardBreak = document.createElement("br");
  itemsContainer.append(colourCardBreak);
}

function fetchColorsList() {
  fetch("https://reqres.in/api/unknown") // aqui va la URL de la API porque no se puede usar la de colores
    .then((response) => response.json()) // parse JSON es una promesa que devuelve otra promesa
    .then((data) => {
      // data es un objeto con una propiedad data que es un array de colores
      data.data.forEach((color) => {
        // iterar sobre los colores
        addItem(color); // agregar el color a la lista
      }); // iterar sobre los colores y agregarlos a la lista
      localStorage.setItem("colors", JSON.stringify(data.data)); // guardar en localStorage
    })
    .catch((error) => console.error(error));
}

//recuperar los colores de localStorage
function loadColorsFromStorage() {
  const storedColors = localStorage.getItem("colors"); // obtener los colores de localStorage
  if (storedColors) {
    // si hay colores en localStorage
    const colors = JSON.parse(storedColors); // parsear los colores
    colors.forEach((color) => {
      // iterar sobre los colores
      addItem(color); // agregar el color a la lista
    });
  }
}

fetchColorsList();
loadColorsFromStorage();

document.querySelector("#clear-btn").addEventListener("click", clearColors);
document.querySelector("#load-btn").addEventListener("click", fetchColorsList);

function clearColors() {
  // limpiar la lista de colores
  itemsContainer.innerHTML = "";
  localStorage.removeItem("colors"); // limpiar los colores de localStorage
}
