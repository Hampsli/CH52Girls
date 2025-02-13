export class FriendAge {
    constructor(name, year, month, day) {
        this.name = name;
        this.year = year;
        this.month = month;
        this.day = day;
    }

    returnAge() {
        const age = calcularEdad(this.year, this.month, this.day);
        return `${this.name} is ${age} today!`;
    }
}
