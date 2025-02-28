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
  fetch("https://reqres.in/api/unknown") // hacemos la solicitud con fetch
    .then(response => response.json()) //convertimos la repuesta a Json
    .then(data => {
      // vamos a guardar los datos ahora en localStorage
    //de manera local|guardamos los item color| en nuesto Json en cadena guradamos nuestros datos
      localStorage.setItem("colors", JSON.stringify(data.data));
      //Aqui es donde se conecta con nuestro addItem y se manda al Html
      data.data.forEach(color => addItem(color)); // Agregamos cada color al HTML
    })
    // capturamos el error 
    .catch(error => console.error("Error al obtener los colores:", error));
}


function loadColorsFromStorage() {
  const storedColors = localStorage.getItem("colors"); // Obtener datos del almacenamiento

  if (storedColors) { // Si hay datos guardados...
    const colors = JSON.parse(storedColors); // Convertimos la cadena en un objeto
    colors.forEach(color => addItem(color)); // Mostramos los colores en la página
  } else {
    fetchColorsList(); // Si no hay datos, descargamos desde la API
  }
}


fetchColorsList()
loadColorsFromStorage()