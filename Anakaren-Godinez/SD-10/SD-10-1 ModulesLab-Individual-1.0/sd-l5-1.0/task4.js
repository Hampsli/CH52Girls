import { ageCalculator } from './task3.js';

export class FriendWithAge {
    constructor(name, year, month, day) {
        this.name = name;
        this.year = Number(year);
        this.month = Number(month);
        this.day = Number(day);
    }

    returnAge() {
        const age = ageCalculator(this.year, this.month, this.day);
        return `${this.name} is ${age} today!`;
        }
    }
const friendAge = new FriendWithAge(`Kimi`,`1998`,`11`,`5`);
console.log(friendAge.returnAge());

