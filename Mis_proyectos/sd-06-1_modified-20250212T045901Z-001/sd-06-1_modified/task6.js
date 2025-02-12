

// Type your code below this line!

function ShoppingList() {
    this.items = []; 

    this.addItem = function(item) {
        this.items.push(item);  
    };

  
    this.printList = function() {
        console.log(this.items); 
    };
}

const numberOfItems = parseInt(prompt("¿Cuántos artículos desea agregar a su lista de compras?"), 10);
const myShoppingList = new ShoppingList();

for (let i = 0; i < numberOfItems; i++) {
    let item = prompt(`Ingrese el artículo número ${i + 1}:`);
    myShoppingList.addItem(item);  
}

myShoppingList.printList();

// Type your code above this line!

