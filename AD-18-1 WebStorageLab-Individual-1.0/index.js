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

/*.then(function(response) {
    return response.json();
})*/


function fetchColorsList() {
  return fetch("https://reqres.in/api/unknown") //Hace una petición fetch a la API. Esto hace una solicitud HTTP GET para obtener la lista de colores.
  .then(response => response.json())//response.json() extrae los datos en formato JSON para poder usarlos en JavaScript. 
  .then(data => {
    const colors = data.data;// Extrae solo la lista de colores. La API devuelve un objeto con muchas propiedades, pero solo nos interesa "data", que contiene la lista de colores.
    localStorage.setItem("colors", JSON.stringify(colors));// Guarda en LocalStorage. Convertimos el array colors en una cadena de texto (JSON.stringify()) y lo guardamos en el almacenamiento local para futuras visitas
    itemsContainer.innerHTML = ""; //Limpia la lista antes de cargar nuevos elementos. Esto evita que se dupliquen los colores cada vez que se ejecuta la función.
    colors.forEach(addItem) //Recorre la lista de colores y los agrega al HTML usando addItem(). forEach() llama a addItem() para cada color en la lista.
  })
  .catch(error => console.error("Error al obtener los colores:", error)); //Maneja errores en caso de que falle la petición. Si algo sale mal (por ejemplo, no hay internet), se muestra un mensaje de error en la consola.
}

function loadColorsFromStorage() { //Esta función carga los colores desde el localStorage y los muestra en la página.
  const storedColors = localStorage.getItem("colors"); //Obtiene los colores almacenados en localStorage. localStorage.getItem() recupera los datos guardados previamente
  if (storedColors){ //Verifica si hay datos almacenados. Si storedColors no es null, significa que ya hay datos guardados
    const colors = JSON.parse(storedColors); //Convierte los datos almacenados en un array de objetos. JSON.parse() convierte la cadena guardada en localStorage de nuevo en un array de objetos
    itemsContainer.innerHTML = "" ; //Limpia la lista de colores en la página antes de mostrarlos. Esto previene que se dupliquen elementos si la función se llama varias veces
    colors.forEach(addItem); //Muestra los colores en la página usando addItem(). forEach() llama a addItem() para cada color guardado en localStorage.
  } else {
    fetchColorsList(); //Si no hay datos en localStorage, llama a fetchColorsList(). Esto asegura que si localStorage está vacío (por ejemplo, en la primera carga de la página), se haga una petición a la API.
  } 
}

document.addEventListener("DOMContentLoaded", loadColorsFromStorage); //Este código hace que loadColorsFromStorage() se ejecute cuando la página se carga: Cuando la página carga, queremos mostrar los colores de localStorage si existen.
//Si no hay datos guardados, los descargamos de la API y los guardamos en localStorage.
/* Puedes ver si los colores se guardan correctamente en localStorage:
Abre las herramientas de desarrollo (F12 en Chrome).
Ve a la pestaña "Application" > "Local Storage" > "http://tu-sitio-web.com".
Deberías ver una clave llamada "colors" con los datos almacenados.
Si borras localStorage y recargas la página, los colores se volverán a descargar desde la API. */

fetchColorsList()
loadColorsFromStorage()

function revomeItems() {
  const allItems = document.querySelector("#list-items")
  allItems.remove()
}

const body = document.querySelector("body");
const button = document.createElement("button");
button.innerText = "Click here to remove items"
button.addEventListener("click", revomeItems)
body.append(button)