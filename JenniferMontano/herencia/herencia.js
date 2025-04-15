// función/método constructor -> construye objetos movie
function Movie(name, watched, times) {
  // this. nos permite acceder a propiedades específicas de mi objeto
  this.name = String(name);
  this.watched = Boolean(watched);
  // en este casi aoellido es un método constructor
  this.times = Number(times);
  // en la propiedad info se está asignando un método que no recibe parámetros por lo tanto info es un método
  this.info = function () {
    if (this.watched === true) {
      console.log("I have watched " + this.name + " " + this.times + " times.");
    } else {
      console.log("I have not watched " + this.name + " yet.");
    }
  };
}

const watchList = [];

// Vamos a crear un objeto movie por medio del constructor "new Movie"
const movie1 = new Movie("Son como niños", true, 5);
const movie2 = new Movie("Bastardos sin gloria", true, 6);

// vamos a incluirla en nuestra lista
watchList.push(movie1);
watchList.push(movie2);
//se manda a llamar o accedemos a su información de la movie1.
// El método info() se añade a cualquier objeto de película que creemos utilizándolo.

// todos los objetos que se creen apartir de la función movie, tienen el método .info()
// hereda las características de la función movie
/*movie1.info();*/

// se agrega
/*console.log(movie2.name);*/
/*watchList[0].info();*/
// imprime toda la lista de películas
/*console.log(watchList);*/

// nuevo método para crear un objeto
const avatar = Object.create(movie2);
watchList.push(avatar);

avatar.name = "Avatar";
avatar.times = 5.835;
avatar.times = avatar.times.toFixed(2);
//todo lo que hay en el objeto avatar creado
avatar.info();
//todo lo que hay en el objeto avatar localizado en la posición [2]
watchList[2].info();
console.log(avatar);
