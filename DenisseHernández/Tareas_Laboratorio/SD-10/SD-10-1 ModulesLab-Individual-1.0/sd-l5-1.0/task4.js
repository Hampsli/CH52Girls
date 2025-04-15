import { ageCalculator } from './task3.js';

export class FriendAge {
    constructor(name, year, month, day){
        this.name = name;
        this.year = Number(year);
        this.month = Number(month);
        this.day = Number(day);
    }
    returnAge(){
        const age = ageCalculator(this.year, this.month, this.day);
        return `${this.name} is ${age} today!`;

    }

}
const friend = new FriendAge("Karim",2000,12,25);
console.log(friend.returnAge());