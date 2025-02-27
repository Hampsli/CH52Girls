
function js_style(){
    const paragraph = document.querySelector("p")
    paragraph.style.color = "red";
    paragraph.style.fontFamily = "arial"
    paragraph.style.fontSize = "30px"
}

const button = document.querySelector("#jsstyle");
button.addEventListener("click",js_style)