

// Type your code below this line!

//Hay otro tipo de constructor que es más conveniente utilizar por buenas prácticas de JS
//el constructor class

class ShoppingList {
    constructor(largo) {
        this.lista = {}; // Objeto para almacenar los productos y cantidades
        this.largo = largo;
    }

    addItem(producto, cantidad) {
        if (!producto || isNaN(cantidad) || cantidad <= 0) {
            console.log("Error: Ingresa productos con cantidades válidas.");
            process.exit(1);
        }
        this.lista[producto] = (this.lista[producto] || 0) + cantidad; // Suma si el producto ya existe
    }

    showList() {
        console.log("Lista de compras:", this.lista);
    }
}

// Obtener el número de elementos a agregar
const largo = parseInt(process.argv[2]);

if (isNaN(largo) || largo <= 0) {
    console.log("Error: Debes ingresar un número válido de productos.");
    process.exit(1);
}

// Crear una instancia de ShoppingList
const miLista = new ShoppingList(largo);

// Agregar productos a la lista
for (let i = 0; i < largo; i++) {
    let producto = process.argv[3 + i * 2];      
    let cantidad = parseInt(process.argv[4 + i * 2]);
    miLista.addItem(producto, cantidad);
}

// Mostrar la lista final
miLista.showList();


// Type your code above this line!

/////Para hacer el código con el constructor function:
/*
function ShoppingList(largo) {
    this.lista = {}; // Objeto para almacenar los productos y cantidades
    this.largo = largo;
}

ShoppingList.prototype.addItem = function (producto, cantidad) {
    if (!producto || isNaN(cantidad) || cantidad <= 0) {
        console.log("Error: Ingresa productos con cantidades válidas.");
        process.exit(1);
    }
    this.lista[producto] = (this.lista[producto] || 0) + cantidad; // Suma si el producto ya existe
};

ShoppingList.prototype.showList = function () {
    console.log("Lista de compras:", this.lista);
};

// Obtener el número de elementos a agregar
const largo = parseInt(process.argv[2]);

if (isNaN(largo) || largo <= 0) {
    console.log("Error: Debes ingresar un número válido de productos.");
    process.exit(1);
}

// Crear una instancia de ShoppingList
const miLista = new ShoppingList(largo);

// Agregar productos a la lista
for (let i = 0; i < largo; i++) {
    let producto = process.argv[3 + i * 2];      
    let cantidad = parseInt(process.argv[4 + i * 2]);
    miLista.addItem(producto, cantidad);
}

// Mostrar la lista final
miLista.showList();

*/