export class FriendAge {
    constructor(name, year, month, day) {
        this.name = name;
        this.year = year;
        this.month = month;
        this.day = day;
    }
    returnAge() {
        const birthDate = new Date(year);
        const today = new Date();
        
        let age = today.getFullYear() - birthDate.getFullYear();
    }
    
    console.log(this.name + " is " + this.age + " today!");

    

}
