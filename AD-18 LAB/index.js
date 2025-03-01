const itemsContainer = document.querySelector("#list-items")

//Esta función se encarga de crear y agregar una tarjeta de color al contenedor
function addItem(item) {
  const colourCard = document.createElement("section")
  colourCard.className = "card w-75"
  itemsContainer.append(colourCard)

  //Creacion del contenido de la tarjeta
  const colourCardBody = document.createElement("article")
  colourCardBody.className = "card-body"
  colourCard.append(colourCardBody)

  //Creacion del titulo de la tarjeta
  const colourCardTitle = document.createElement("h5")
  colourCardTitle.className = "card-title"
  colourCardTitle.innerText = item.name
  colourCardBody.append(colourCardTitle)

  //Creacion del texto de la tarjeta
  const colourCardText = document.createElement("p")
  colourCardText.className = "card-text"
  colourCardText.innerText = item.pantone_value
  colourCardBody.append(colourCardText)

  //Creacion del color de la tarjeta
  const colourCardColour = document.createElement("figure")
  colourCardColour.style = "background-color: " + item.color + ";"
  colourCardColour.innerText = item.color
  colourCardBody.append(colourCardColour)

  //Creacion de un salto de linea
  const colourCardBreak = document.createElement("br")
  itemsContainer.append(colourCardBreak)
}

//Tarea 1: Crear una función que se encargue de realizar la solicitud a la API para descargar la lista de colores
//Tarea 2: Mostrar la lista de colores en el index.html
async function fetchColorsList() {
  try {
    // Realiza la solicitud a la API
    const response = await fetch("https://reqres.in/api/unknown"); 

    // Verifica si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Convierte la respuesta a JSON
    const items = await response.json();

    // Extrae la lista de colores
    const list = items.data;

    /* Tarea 3: Alamacenar la lista de colores usando el almacenanmiento local (LocalStorage) */
    // Guardar la lista en el localStorage
    localStorage.setItem("colors", JSON.stringify(list));

    // Itera sobre cada color y lo agrega al contenedor
    list.forEach(color => {
      addItem(color);
    });
  } catch (error) {
    console.error("Failed to fetch colors:", error);
  }
}

///Tarea 4: Crear una función que se encargue de cargar los colores desde el localStorage
function loadColorsFromStorage() {
  const colors = JSON.parse(localStorage.getItem("colors"));
  if (colors) {
    colors.forEach(color => {
      addItem(color);
    });
  }
}

fetchColorsList();
loadColorsFromStorage();