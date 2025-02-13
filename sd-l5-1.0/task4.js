import { ageCalculator } from './task3.js'; // Importamos la función de cálculo de edad

// Clase para guardar nombre y edad de un amigo
export class FriendAge {
    constructor(name, year, month, day) {
        this.name = name;
        this.year = year;
        this.month = month;
        this.day = day;
    }

    // Método para calcular y mostrar la edad
    returnAge() {
        const age = ageCalculator(this.year, this.month, this.day); // Usamos la función de task3
        return `${this.name} is ${age} today!`;
    }
};