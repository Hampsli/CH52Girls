
// Importa la función ageCalculator para reutilizar la lógica de cálculo de edad.
import { ageCalculator } from './ageCalculator.js';

/**
 * Clase que representa a un amigo y puede retornar un mensaje con su edad.
 */
export class FriendAge {
  /**
   * Crea una instancia de FriendAge.
   * @param {string} name - El nombre del amigo.
   * @param {number} year - El año de nacimiento.
   * @param {number} month - El mes de nacimiento (1-12).
   * @param {number} day - El día de nacimiento.
   */
  constructor(name, year, month, day) {
    this.name = name;
    this.year = year;
    this.month = month;
    this.day = day;
  }
  
  /**
   * Retorna un string con el nombre del amigo y su edad actual.
   * @returns {string} - Ejemplo: "Carlos is 25 today!"
   */
  returnAge() {
    const age = ageCalculator(this.year, this.month, this.day);
    return `${this.name} is ${age} today!`;
  }
}