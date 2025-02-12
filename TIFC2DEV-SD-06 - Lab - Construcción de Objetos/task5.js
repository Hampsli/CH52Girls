/* TASK 5
Create a constructor for a FriendsList object that will store a list of names in an array.

* Your program should prompt the user for a number, then prompt that number of times to list each name one at a time.
* Your program should then print the array directly to the console.
  * The output should look like this: `[ 'name1', 'name2' ]` */

// Type your code below this line!
const readline = require("readline");

// Crear la interfaz para recibir entrada del usuario en la terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Constructor FriendsList
function FriendsList() {
    this.friends = [];
}

// Pedir la cantidad de amigos
rl.question("How many friends do you want to add? ", (num) => {
    const count = parseInt(num);

    const friendsList = new FriendsList();
    let i = 0;

    function askForFriend() {
        if (i < count) {
            rl.question(`Enter friend ${i + 1}: `, (name) => {
                friendsList.friends.push(name);
                i++;
                askForFriend(); // Pregunta el siguiente nombre
            });
        } else {
            console.log("Your friends list:", friendsList.friends);
            rl.close(); // Cierra la interfaz después de completar la entrada
        }
    }

    askForFriend();
});
// Type your code above this line!

