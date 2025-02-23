function showAlert() {
    alert("ITS BURGERTIME");
}

function logMessage() {
    console.log("Someone click on BURGER TOWN!");
}

function addBurgerImage() {
    let imgContainer = document.getElementById("burger-image-container");
    let img = document.createElement("img");
    img.src = "Burger4.svg"; // Placeholder image
    img.alt = "Imagen de hamburguesa";
    imgContainer.appendChild(img);
}

addBurgerImage();

function changeColor() {
    document.getElementById("burger-header").style.color = "red";
}
