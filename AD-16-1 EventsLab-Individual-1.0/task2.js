function createnames( p1, p2){
    const name = document.createElement("p")
    name.innerText = p1
    const lastname = document. createElement("p")
    lastname.innerText = p2

    const getnames = document.createElement("article");
    getnames.append(name, lastname)

    const groupnames = document.querySelector("body");
    groupnames.append(getnames)

}

function getFormvalue(event){
    event.preventDefault();
    const completename = document.querySelector("input[name = fname]").value
    const completelast = document.querySelector("input[name = lname]").value
    createnames(completename, completelast)
}

const button = document.querySelector("input[type=submit]");
button.addEventListener("click",getFormvalue)
