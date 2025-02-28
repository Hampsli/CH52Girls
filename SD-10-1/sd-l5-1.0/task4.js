/*export class FriendAge {

}*/

export class FriendAge {
    constructor(name, year, month, day) {
        this.name = name;
        this.year = year;
        this.month = month;
        this.day = day;
    }

    returnAge() {
        const age = ageCalculator(this.year, this.month, this.day); // Usamos la función de edad calculada
        return `${this.name} is ${age} today!`;
    }
}