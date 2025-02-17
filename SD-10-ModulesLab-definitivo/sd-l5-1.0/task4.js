export class FriendAge {
    constructor(name, year, month, day) {
        this.name = name;
        this.year = year;
        this.month = month;
        this.day = day;
    }
    returnAge() {
        let today = new Date();
        let birthdDate = new Date(year, month, day);
    
        let age = today.getFullYear() - birthdDate.getFullYear();
       
        return age;
    }
    
}
const nameAge = new FriendAge();
console.log(`${this.name} is ${this.age} today!`);