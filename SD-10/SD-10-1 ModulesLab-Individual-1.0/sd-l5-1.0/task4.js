export class FriendAge {
    constructor(name, year, month, day) {
        this.name = name;
        this.year = year;
        this.month = month;
        this.day = day;
    }

    returnAge() {
        let today = new Date();
        let birthday = new Date(this.year, this.month - 1, this.day);
        let age = today.getFullYear() - birthday.getFullYear();
        let theMonth = today.getMonth() - birthday.getMonth();

        
        if (theMonth < 0 || (theMonth === 0 && today.getDate() < birthday.getDate())) {
            age--;
        }

        return `${this.name} is ${age} today!`;
    }
}

let name = process.argv[3];
let year = parseInt(process.argv[4]);
let month = parseInt(process.argv[5]);
let day = parseInt(process.argv[6]);

let friend = new FriendAge(name, year, month, day);
console.log(friend.returnAge()); 
