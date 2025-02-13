import * as task3 from "./task3.js";
export class FriendAge {
    constructor(name,year,month,day){
        this.name=name;
        this.year=year;
        this.month=month;
        this.day=day;
    }
    returnAge(){
        this.age=task3.ageCalculator(this.year,this.month,this.day);
        return `${this.name} is ${this.age} today!`
    }
}