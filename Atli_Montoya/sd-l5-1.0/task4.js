

export class FriendAge {
    constructor(name, year, month, day) {
        this.name = name;
        this.year = year;
        this.month = month - 1; 
        this.day = day;
    }

    returnAge() {
        let today = new Date();
        let birthDate = new Date(this.year, this.month, this.day);

        let age = today.getFullYear() - birthDate.getFullYear();
        let monthDiff = today.getMonth() - birthDate.getMonth();
        let dayDiff = today.getDate() - birthDate.getDate();

        
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        } 

        return `${this.name} is ${age} today!`;
    }

}