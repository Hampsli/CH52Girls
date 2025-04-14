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



// Función para obtener la lista desde la API y almacenarla en localStorage
async function fetchColorsList() {
    const endpoint = "https://reqres.in/api/unknown"; // URL del endpoint

    try {
        let respuesta = await fetch(endpoint);

        if (!respuesta.ok) {
            throw new Error(`Error en la solicitud: ${respuesta.status}`);
        }

        let data = await respuesta.json(); // Convertir respuesta a JSON
        let listaColores = data.data; // La lista de colores está en la propiedad "data"

        console.log("Lista descargada:", listaColores);

        // Guardar la lista en el almacenamiento local
        localStorage.setItem("colors", JSON.stringify(listaColores));

        // Llamar a loadColorsFromStorage() para actualizar la interfaz
        loadColorsFromStorage();
    } catch (error) {
        console.error("Hubo un problema al descargar la lista:", error);
    }
}

// Función para cargar los colores desde el almacenamiento local
function loadColorsFromStorage() {
    let coloresGuardados = localStorage.getItem("colors");

    if (coloresGuardados) {
        let listaColores = JSON.parse(coloresGuardados);

        // Limpiar el contenedor antes de agregar los elementos
        itemsContainer.innerHTML = "";

        // Agregar cada color a la lista en index.html
        listaColores.forEach(color => addItem(color));
    } else {
        console.log("No hay colores almacenados en localStorage.");
    }
}

// Llamar a fetchColorsList() para descargar y guardar los datos
fetchColorsList();
loadColorsFromStorage()
