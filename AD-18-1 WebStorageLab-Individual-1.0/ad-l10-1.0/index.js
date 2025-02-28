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

async function fetchColorsList() {    //Tarea 1: Implementando la funcion fetchColorsList() utilizando la API Fetch para desrcargar la lista completa de colores desde la pagina web   
  try {
    const response = await fetch('https://reqres.in/api/unknown');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const colors = data.data;

    // Tarea 3: Almacenar los colores en localStorage
    localStorage.setItem('colors', JSON.stringify(colors)); //Convierte el arreglo de colores en una cadena JSON para almacenarlos en localStorage
       
    colors.forEach(color => {   //Se obtienen los colores desde la API y pasan a la funcion addItem 
      addItem(color);           //Esto asegura que cada color obtenido de la API se pasa como argumento a la funcion addItem
    });
  } catch (error) {
    console.error("Failed to fetch colors:", error);
  }
}

function loadColorsFromStorage() {   //Tarea 3: se verifica si hay datos (colores) almacenados en localStorage.  
  const storedColors = localStorage.getItem('colors');  //Si existen colores los recupera con localStorage.getItem('colors'), los convierte en arreglo con json.parse  y luego llama a addItem para mostrar cada color en la pagina
  if (storedColors) {
    const colors = JSON.parse(storedColors);
    colors.forEach(color => {
      addItem(color);
    });
  } else {
    fetchColorsList(); // Tarea 3: Si no existen los colores en localStorage, llama a fetchColorsList() par obtener los colores desde la API
  }
}

// Primero, intenta cargar desde localStorage
loadColorsFromStorage(); //Es deceir, al cargar la pagina primero intente cargar los colores desde el almacenamiento local (localstorage) si no hay datos almacenados harà una solicitud a la API mediante "fetchColorsList"

//Lo que se espera en la tarea 3: cuando cargue la pagina si hay datos en localStorage se mostraran inmediatamente
//Si NO hay datos en localStorage, los colores seran obtenidos desde la API, almacenados en localStorage y mostrados 