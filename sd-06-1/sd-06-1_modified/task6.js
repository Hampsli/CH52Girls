function ShoppingList() {
    this.items = [];

    this.addItem = function(item, quantity) {
        this.items.push({ item, quantity });
    };

    this.showList = function() {
        console.log(this.items);
    };
}

let list = new ShoppingList();
list.addItem("Leche", 2);
list.addItem("Pan", 1);
list.showList();

