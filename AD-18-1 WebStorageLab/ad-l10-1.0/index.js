const itemsContainer = document.querySelector("#list-items")

function addItem(item) {
  const colourCard = document.createElement("section")
  colourCard.className = "card w-75"
  itemsContainer.append(colourCard)

  const colourCardBody = document.createElement("article")
  colourCardBody.className = "card-body"
  colourCard.append(colourCardBody)

  const colourCardTitle = document.createElement("h5")
  colourCardTitle.className = "card-title"
  colourCardTitle.innerText = item.name
  colourCardBody.append(colourCardTitle)

  const colourCardText = document.createElement("p")
  colourCardText.className = "card-text"
  colourCardText.innerText = item.pantone_value
  colourCardBody.append(colourCardText)

  const colourCardColour = document.createElement("figure")
  colourCardColour.style = "background-color: " + item.color + ";"
  colourCardColour.innerText = item.color
  colourCardBody.append(colourCardColour)

  const colourCardBreak = document.createElement("br")
  itemsContainer.append(colourCardBreak)
}

function fetchColorsList() {
  fetch("https://reqres.in/api/unknown")
    .then(response => response.json())  
    .then(data => {
      localStorage.setItem("colors", JSON.stringify(data.data)); // Guardamos la lista en localStorage
      data.data.forEach(color => addItem(color));  // Mostramos los colores
    })
    .catch(error => console.error("Error al obtener los datos:", error));
}

function loadColorsFromStorage() {
  const storedColors = localStorage.getItem("colors"); // Obtenemos los datos del localStorage
  if (storedColors) {
    const colors = JSON.parse(storedColors);  // Convertimos el string JSON a objeto
    colors.forEach(color => addItem(color));  // Mostramos los colores en la página
  }
}


fetchColorsList();
loadColorsFromStorage();