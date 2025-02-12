
// Type your code below this line!
const prompt = require('prompt-sync')();
let name = process.argv[3] ;
let cantidad = process.argv[3] ;

// Constructor de FriendsList con lista vacia
function FriendsList() {
    this.friends = []; 

    // Método para agregar un amigo a la lista
    this.addFriend = function(name) {
        this.friends.push(name);
    }
}

const FriendsList1 = new FriendsList();

// Agregar los amigos a la lista
for (let i = 0; i < cantidad; i++) {
    let friends = process.argv[i + 4]; ;
    FriendsList1.addFriend(friends); 
}

// Imprimir la lista de amigos en el formato solicitado
console.log(FriendsList1.friends);


// Type your code above this line!

