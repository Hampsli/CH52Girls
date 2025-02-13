import { ageCalculator } from "./task3.js";
export class FriendAge {
    constructor(name,año, mes, dia) {
        this.name = name;

        this.edad = ageCalculator(año, mes, dia);
        console.log(this.name+" is "+ this.edad +" today!")
    }
   
    
}
const amigo = new FriendAge("Kimi", 1998, 11, 5);