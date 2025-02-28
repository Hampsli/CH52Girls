//Crear un comentario por medio de la fn buildComment
//p1, p2 son argumentos esperados como elementos <inputs>
function buildComment(p1, p2) {
  //Se crea una variable encabezado
  const header = document.createElement("h2")
  //Se esta leyendo el valor del elemento p1 -> propiedad .value
  //Se asigna al atributo innerText, el valor del p1.
  header.innerText = p1.value
  // se crea un elemento P, se guarda la variable paragraph 
  const paragraph = document.createElement("p")
  //Se asigna al tributo innerText de p, el valor del p2
  paragraph.innerText = p2.value
  //Se crea el elemento article para agrupar el nuevo h2 y p
  const comment = document.createElement("article")
  //Se agrupan dentro de un elemento HTML aricle
  comment.append(header, paragraph)
  //finalmente seleccionamos el div o elemento HTML donde queremos insertar nuestro contenedor de articulos
  const commentContainer = document.querySelector("#comments")
  //Utilizamos el metodo append para anezar el ariticulo que contiene nuestro h2 y p creado con aterioridad
  commentContainer.append(comment)
}
// Esta función, va a utilizar la funcion anterior buildComment, para construir el comentario
function writeComment() {
  // esta funci´´on obtiene las dos casillas <inputs> de texto del DOM
  const name = document.querySelector('#nameInput')
  const message = document.querySelector('#messageInput')
  //Asigna como paramaetros <inputs> a la función anterior
  buildComment(name, message)
}

/*Asignarle evento al botón, utilizando el ID del boton que e encuentra en em html y querySelector obtenemos el elemento button y lo asignamos 
a la variable */
const button =document.querySelector("#commentButton");

//Ahora lo hacemos clickeable o vamos a escuchar el evento click en el boton
// con addEventListener es para saber que evento queremos escuchar en el boton y despues ejecutara la funcion writeComment
button.addEventListener("click", writeComment);