import { ageCalculator } from "./task3.js";

export class FriendAge {
    constructor(name, year, month, day){
        this.name = name;
        this.year = year;
        this.month = month;
        this.day = day;
    }
    returnAge(){
        const age = ageCalculator(this.year, this.month, this.day);
        console.log("Calculated age:", age);
        console.log(this.name + " is " + age + " today!");
        //return `${this.name} is ${age} today!`
    }
}


const anita = new FriendAge("Kimi", 1998, "Noviembre", 5);
anita.returnAge();