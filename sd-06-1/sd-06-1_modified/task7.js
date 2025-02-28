function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;

    this.getInfo = function() {
        return `${this.year} ${this.color} ${this.make} ${this.model}`;
    };
}

let myCar = new Car("Toyota", "Corolla", 2020, "rojo");
console.log(myCar.getInfo());
