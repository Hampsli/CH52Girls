
// Type your code below this line!


function FriendsList(){

    this.friends =[];

    this.addFriends = function(count) {
        for (let i = 0; i < count; i++) {
            let friendName = prompt(`Ingrese el nombre del amigo ${i + 1}:`);
            this.friends.push(friendName);
        }
    };
    this.printFriends = function() {
        console.log(this.friends);
    };
}
const numberOfFriends = parseInt(prompt("¿Cuántos amigos quiere agregar?"), 10);

const myFriends = new FriendsList();

myFriends.addFriends(numberOfFriends);

myFriends.printFriends();


// Type your code above this line!

