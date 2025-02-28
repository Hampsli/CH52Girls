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

 
// Función para obtener la lista de colores desde la API y almacenarlos en localStorage
function fetchColorsList() {
  // Verificar si ya existen colores almacenados en localStorage
  const storedColors = localStorage.getItem('colors');
  
  if (storedColors) {
    // Si los colores están en localStorage, los convertimos de vuelta a un arreglo
    const colors = JSON.parse(storedColors);
    colors.forEach(item => {
      addItem(item); // Agregar cada color a la página
    });
  } else {
    // Si no hay colores en localStorage, hacer la solicitud a la API
    fetch('https://reqres.in/api/unknown')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        return response.json(); // Convertir la respuesta a formato JSON
      })
      .then(data => {
        const colors = data.data; // Obtener la lista de colores de la respuesta
        colors.forEach(item => {
          addItem(item); // Agregar cada color a la página
        });

        // Almacenar la lista de colores en localStorage como una cadena JSON
        localStorage.setItem('colors', JSON.stringify(colors));
      })
      .catch(error => {
        console.error('Hubo un problema con la solicitud:', error); // Mostrar error si algo falla
      });
  }
}

// Llamar a fetchColorsList cuando la página se haya cargado completamente
document.addEventListener('DOMContentLoaded', fetchColorsList);
fetchColorsList()
loadColorsFromStorage()