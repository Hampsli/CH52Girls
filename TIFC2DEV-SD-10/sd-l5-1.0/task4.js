
export class FriendAge {
    constructor(año, mes, dia) {
        this.birthDate = new Date(año, mes - 1, dia);
    }
    
    returnAge() {
        const currentDate = new Date();
        let age = currentDate.getFullYear() - this.birthDate.getFullYear();
        const currentMonth = currentDate.getMonth();
        const currentDay = currentDate.getDate();
        
        if (currentMonth < this.birthDate.getMonth() || (currentMonth === this.birthDate.getMonth() && currentDay < this.birthDate.getDate())) {
          age--;
        }   
        return age;
    }
}
    
const friend = new FriendAge(2000, 12, 25);
console.log(friend.returnAge());