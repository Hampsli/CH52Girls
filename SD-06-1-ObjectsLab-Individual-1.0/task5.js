const prompt = require("prompt-sync")();

function FriendList(){
    this.newArray = [];
    this.names = function() {
        const number = process.argv[3] || prompt("Write a number: ");
        for(let i = 1; i <= number; i++){
            let friends = process.argv[3+i] || prompt("Write a name: ")
            this.newArray.push(friends);
        }
    }
    this.print = function() {
        console.log(this.newArray);
    }
}

let list = new FriendList();
list.names();
list.print();



