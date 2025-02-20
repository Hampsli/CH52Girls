const goodbye = document.getElementById("goodbye");
goodbye.innerHTML = "GoodBye"

const orange = document.getElementById("orange");
orange.style.color = "orange"

const clicMe = document.createElement("h1");
clickMe.innerHTML = "Click Me"

document.body.appendChild(clicMe);

clickMe.addEventListenner("click", () => {
    if (clicMe.style.color === "brown") {
        clicMe.style.color = "";
    } else {
        clicMe.style.color ="brown";
    }
});
