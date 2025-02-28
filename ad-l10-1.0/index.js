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
  fetch("https://reqres.in/api/unknown")//Hago peticion al endpoint
    .then(response => {
    if (!response.ok) { //Comprueba si la respuesta del servidor tiene un estado OK  
      throw new Error("Error al obtener los datos");//Si no, lanzaa un error.
    }
      return response.json();//Regresa la respuesta/promesa en json
    })
    .then(data => {
      localStorage.setItem('colorsList', JSON.stringify(data.data));// Almaceno los datos en localStorage
      data.data.forEach(color => 
        addItem(color));//aqui llamo item por cada color de la lista ( en el array data.data-aqui esta la lista de colores) para conectar con addItem
  })//llamo a addItem(item) para cada color en la lista
    .catch(error => console.error("Error:", error));
    }
      loadColorsFromStorage();//Si hay error, carga desde local storagee
  

function loadColorsFromStorage() {
  const storedColors = localStorage.getItem('colorsList');//Obtengo los datos almacenados en storage
  if (storedColors) { //si hay datos se procesa
    const colorsData = JSON.parse(storedColors); //aqui convierto JSOn aun objeto JS con JSON.parse
    colorsData.forEach(item => { //itera cada objeto color 
      addItem(item);//y llamo a item para agregar cad color 
    });
  }
}

//fetchColorsList();
