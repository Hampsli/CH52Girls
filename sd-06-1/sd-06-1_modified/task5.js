const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

/* FriendsList es un constructor que nos sirve para almacenar una lista de nombres en un array*/
function FriendsList() {
    this.friends = [];  // este es unn array para almacenar los nombres
    //friends es una propiedad

    this.addFriend = function(name) {
        this.friends.push(name); // en este se agrea un amigo al array o lista
    }; // add friend es un metodo

    this.showFriends = function() {
        console.log(this.friends); // y con este se imprime la lista
    };
}

let friendsList = new FriendsList();

//readline permite recibir input en la terminal, es decir que eso permite que el usuario ingrese valores en la terminal
readline.question("¿Cuántos amigos quieres agregar? ", (num) => {
    let count = parseInt(num); // con parseInt(num) convierte el input del usuario (string) en número entero
    let added = 0;


//Aqui se tiene que usar una función que pide un nombre y lo guarda en el array
//Se repite hasta que el usuario ingrese la cantidad de nombres deseada, la cual señalo en el paso anteiror
    function askName() {
        if (added < count) {
            readline.question(`Nombre del amigo ${added + 1}: `, (name) => {
                friendsList.addFriend(name);
                added++;
                askName();
            });
        } else {
            friendsList.showFriends(); //Cuando se alcanzan los nombres esperados, dependiendo de la cantidad que mencionó el usuario, muestra la lista con showFriends()
            readline.close();
        }
    }

    askName();
});
