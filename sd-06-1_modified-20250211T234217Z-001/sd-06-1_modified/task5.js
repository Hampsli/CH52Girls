

// Type your code below this line!

function FriendsList() {
    this.friends = []; // Lista de amigos
    this.addFriend= function(name){
        this.friends.push(name);
    };
}

// Pedimos los nombres de los amigos
const numFriends = parseInt(process.argv[3]);

const myFriends = new FriendsList();

for (let i = 0; i < numFriends; i++) {
    let friendName = process.argv[4 + i];  // Obtenemos el nombre del amigo de los argumentos de ejecución
    myFriends.addFriend(friendName);  // Agregamos el nombre del amigo a la lista
}
console.log(`[ '${myFriends.friends.join("', '")}' ]`);
/*
function FriendsList (){
    this.friends=[];//aquí se guardará la lista
}


const dani=new Friends("dani");
const ana= new Friends("ana");

FriendsList.push(dani, ana)

const prompt = require('prompt-sync')();
const from =int(prompt("Hasta: "));

for (i in FriendsList){
    console.log(i*from);
}
*/

// Type your code above this line!

