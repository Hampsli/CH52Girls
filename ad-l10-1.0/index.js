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
  fetch('https://reqres.in/api/unknown')
  .then(response => response.json())
    .then(data => {
      const colors = data.data; // La lista de colores está en la propiedad "data"
      colors.forEach(color => addItem(color));
      
      // Almacenar los colores en localStorage
      localStorage.setItem('colors', JSON.stringify(colors));
    })
    .catch(error => console.error('Error fetching colors:', error));
}

function loadColorsFromStorage() {
  const storedColors = localStorage.getItem('colors');
  if (storedColors) {
    const colors = JSON.parse(storedColors);
    colors.forEach(color => addItem(color));
  } else {
    console.log('No colors found in localStorage.');
  } 
}

function clearColors() {
  itemsContainer.innerHTML = '';
  localStorage.removeItem('colors');
}


fetchColorsList()
loadColorsFromStorage()

document.querySelector('#clear-btn').addEventListener('click', clearColors);
document.querySelector('#load-btn').addEventListener('click', fetchColorsList);