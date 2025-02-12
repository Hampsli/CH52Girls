function ListadeCompras(){
    this.cosas={}
    this.agregar= function(cosas, cantidad){
        this.cosas[cosa]= (this.cosas[cosa] || 0)+cantidad;
    }
    this.printList=function(){
        console.log(this.cosas)
    }
}

// Type your code below this line!

const myList = new ListadeCompras();
myList.cosas("Bolsa de arroz", 2);
myList.cosas("Leche", 12);
myList.cosas("Pan", 1);

// Type your code above this line!

