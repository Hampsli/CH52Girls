export class FriendAge {
    constructor (name, year, month, day) {

        this.name = String(name)
        this.year = Number(year);
        this.month = Number(month);
        this.day = Number(day);
    
        const birthDate = new Date(year, month - 1, day);
        const today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();
        const birthdayThisYear = new Date(today.getFullYear(), month - 1, day);
    

        if (today < birthdayThisYear) {
            age--;
        }

        this.age = age;
    }
    returnAge(){
        console.log(`${this.name} is ${this.age} today!`); 
        console.log('Successful')
    }
}
const friend1 = new FriendAge("Ana", 1996, 9, 7);
const friend2 = new FriendAge("Kim", 1998, 11, 5);

friend1.returnAge();
friend2.returnAge(); 

