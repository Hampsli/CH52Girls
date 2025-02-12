

// Type your code below this line!

function Car(brand, model, year, color, doors, mileage, engineType) {
    this.brand = brand;          
    this.model = model;          
    this.year = year;            
    this.color = color;          
    this.doors = doors;          
    this.mileage = mileage;     
    this.engineType = engineType; 
}


const brand = prompt("Ingrese la marca del coche:");
const model = prompt("Ingrese el modelo del coche:");
const year = prompt("Ingrese el año de fabricación del coche:");
const color = prompt("Ingrese el color del coche:");
const doors = prompt("¿Cuántas puertas tiene el coche?");
const mileage = prompt("¿Cuántos kilómetros tiene el coche?");
const engineType = prompt("¿El coche tiene motor de combustión o eléctrico?");


const myCar = new Car(brand, model, year, color, doors, mileage, engineType);

console.log("Detalles del coche:");
console.log("Marca: " + myCar.brand);
console.log("Modelo: " + myCar.model);
console.log("Año: " + myCar.year);
console.log("Color: " + myCar.color);
console.log("Número de puertas: " + myCar.doors);
console.log("Kilometraje: " + myCar.mileage + " km");
console.log("Tipo de motor: " + myCar.engineType);

// Type your code above this line!

