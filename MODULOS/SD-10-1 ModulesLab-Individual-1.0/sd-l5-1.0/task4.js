/*  A Javiera le gustaría una forma de calcular las edades de sus amigos.
Exporta una clase que devolverá una cadena que contiene el nombre y la edad de un amigo determinado. Deberia:
Toma 4 argumentos - a nombre, a año, a mes, y a día -y construye un objeto con esas 4 propiedades. 
Tener un método público llamado returnAge()que devolverá la siguiente cadena:  <nombre> is <edad> hoy!*/


//Atributo
export class FriendAge {
    constructor (name, year, mes, day){
        this.name = name
        this.year = year 
        this.mes = mes
        this.day = day 
    }


    //Va dentro porque es el comportamiento
    // Comportamiento
    returnAge() {
        const edad = 2025 - this.year; 

        //Forma de concatenar
        return `${this.name} is ${edad} hoy!`;
        }

}


 
const data = new FriendAge("alice", 2001, 12, 25);

// Llamar al método returnAge()(comportamiento del objeto) e imprimir el resultado
console.log(data.returnAge()); // Salida: "alice is 24 hoy!"



