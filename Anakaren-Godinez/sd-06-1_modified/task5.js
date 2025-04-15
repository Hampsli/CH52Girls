// Type your code below this line!
const prompt = require("prompt-sync")();

function FriendsList(num){
    this.list = [];
    let i=0;
    while (i < num){
        let nombre = prompt("Escribe un nombre: ");
        this.list.push(nombre);
        i++; 
    }
}

const numFriends = parseInt(prompt("Cuantos amigos quieres agregar a tu lista de amigo? "));

const myFriends = new FriendsList(numFriends);

console.log(myFriends.list)
// Type your code above this line!

