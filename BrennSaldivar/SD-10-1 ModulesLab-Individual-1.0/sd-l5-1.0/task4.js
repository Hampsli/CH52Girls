
export class FriendAge {
    constructor(name,year,month,day){
        this.name = name;
        this.year = year;
        this.month = month;
        this.day = day;
    }

    returnAge(){
        const today = new Date();
        const birthday = new Date(this.year + '/' + this.month + '/' + this.day)
        let age = today.getFullYear() - birthday.getFullYear()
        const todayMonth = today.getMonth()
        const birthdayMonth = birthday.getMonth()
      
    }
}