// Type your code below this line!
function FriendsList(friends) {
  this.friends = friends;
}

const numFriends = process.argv[3];
const friends = process.argv.slice(4, 4 + numFriends);
const myFriends = new FriendsList(friends);
// Type your code above this line!
console.log(myFriends.friends);
