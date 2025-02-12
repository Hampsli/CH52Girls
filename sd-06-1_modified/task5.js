/*Objetivo del código; Preguntarle al usuario cuantos amigos agregar a su lista, 
preguntar el nombre uno por uno , guardar los nombres en array y mostrar lista en consola*/

// Type your code below this line!
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

function FriendsList() {
  this.friends = [];
}

readline.question("¿Cuántos amigos agregamos? ", (numFriendsInput) => {
  const numFriends = parseInt(numFriendsInput);
  const myFriends = new FriendsList();

  if (!isNaN(numFriends) && numFriends > 0) {
    let i = 0;

    function askForFriend() {
      if (i < numFriends) {
        readline.question(`Ingresa el nombre del amigo ${i + 1}: `, (friendName) => {
          myFriends.friends.push(friendName);
          i++;
          askForFriend(); // Llamada recursiva para el siguiente amigo
        });
      } else {
        console.log(myFriends.friends);
        readline.close(); // Cierra la interfaz readline
      }
    }

    askForFriend(); // Inicia el proceso de preguntar por amigos

  } else {
    console.log("Por favor, ingresa un número válido de amigos.");
    readline.close(); // Cierra la interfaz readline
  }
});
// Type your code above this line!

