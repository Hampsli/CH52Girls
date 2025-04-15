import * as arrays from "./arrays.js"

export class DateString {
  constructor() {
    this.year = new Date().getFullYear()
    this.month = new Date().getMonth()
    this.day = new Date().getDay()
    this.date = new Date().getDate()
  }

  getDateString() {
    return arrays.day[this.day] + " " + this.date + arrays.ordinal[this.date] + " " + arrays.month[this.month] + " " + this.year
  }
}