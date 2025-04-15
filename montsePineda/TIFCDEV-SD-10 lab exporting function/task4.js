/* task 4
Ed would like a way to calculate the ages of his friends.

* Export a class that will return a string containing a given friend's name and age. It should:
  * Take 4 arguments - a **name**, a **year**, a **month**, and a **day** - and construct an object with those 4 properties.
  * Have a public method named `returnAge()` that will return the following string: `<name> is <age> today!` */
import { ageCalculator } from './task3.js'; //importamos la funcione que creeamos en el task 3

export class FriendAge {
    constructor(name,year,month,day){
        this.name = name;
        this.year = year;
        this.month = month;
        this.day = day;
    }
    returnAge() { //utilizamos la funciones con los nuevos datos ingresado
        const age = ageCalculator(this.year, this.month, this.day);
        return `${this.name} is ${age} today!`;
    }
}