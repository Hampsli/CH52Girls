const itemsContainer = document.querySelector("#list-items")//selecciona el id en el HTML y sera el contenedor donde se agregaran las tarjetas de colores

function addItem(item) { //recibe un objeto item=color
  const colourCard = document.createElement("section")//crea tarjeta de color
  colourCard.className = "card w-75" //estilo de bootstrap
  itemsContainer.append(colourCard)

  const colourCardBody = document.createElement("article")//crea contenido de la tarjeta
  colourCardBody.className = "card-body"
  colourCard.append(colourCardBody)//agrega dentro de colourCard

  const colourCardTitle = document.createElement("h5")//titulo de la tarjeta
  colourCardTitle.className = "card-title"
  colourCardTitle.innerText = item.name//el nombre del color
  colourCardBody.append(colourCardTitle)

  const colourCardText = document.createElement("p")//texto
  colourCardText.className = "card-text"
  colourCardText.innerText = item.pantone_value//asignar valor pantone del color
  colourCardBody.append(colourCardText)

  const colourCardColour = document.createElement("figure") //crear figura con el color
  colourCardColour.style = "background-color: " + item.color + ";"//fondo color
  colourCardColour.innerText = item.color//codigo de color como texto
  colourCardBody.append(colourCardColour)

  const colourCardBreak = document.createElement("br")//salto de linea
  itemsContainer.append(colourCardBreak)
}

function fetchColorsList() {
  fetch("https://reqres.in/api/unknown")//solicitud a la API
  .then(response => response.json())//convertir en JSON
  .then(data => {
    const colors = data.data;//extraer lista colores

    localStorage.setItem("colors",JSON.stringify(colors));//Guardar

    colors.forEach(addItem);//colores en pagina
  })
  .catch(error => console.error("Error fetching colors:", error));
}

function loadColorsFromStorage() {
  const storedColors = localStorage.getItem("colors"); //obtener colores guardados

  if (storedColors){
    const colors = JSON.parse(storedColors);//de cadena a objeto
    colors.forEach(addItem);
  }
}

fetchColorsList()
loadColorsFromStorage()

function clearColorsList(){
  itemsContainer.innerHTML = "";//Borra los elementos del container
  localStorage.removeItem("colors");//borra los datos guardados en el localStorage
}

document.getElementById("clear-btn").addEventListener("click", clearColorsList);

function reloadColorsList(){
  clearColorsList();//Borra lista actual
  fetchColorsList();//Vuelve a cargar los colores desde la API
}

document.getElementById("reload-btn").addEventListener("click", reloadColorsList);
