/* task 3
Ed would like a way to calculate an age from a given birth date.

* Export a function that will take 3 arguments - a **year**, a **month**, and a **day** - then return an accurate age.
  * For example, `ageCalculator(2000, 12, 25)` should return the age of someone born on Christmas Day, 2000. */

export function ageCalculator(year,month,day) {
    //Utilizamos el objeto Date() que retorna una cadena que se crea asignandolo a una variable
    let nacimiento = new Date(year,month-1,day)
    //Obtenemos la fecha actualpara esta no se deben ingresar parametros
    let hoy = new Date();
    //Utilizamos los metodos de Date
    //.getFullYear, nos da el año del objeto 
    let edadAño=hoy.getFullYear() -  nacimiento.getFullYear();
    let edadMes=hoy.getMonth() - nacimiento.getMonth();
    
    if(edadMes<0){ //La diferencia entre el mes del nacimeinto y el mes actual si es diferente de cero aun no aumenta de edad
        return edadAño-1
    } else if(edadMes===0 ){//Si la diferencia es cero significa que ya esta en el mes de cumple
        return edadAño;
    }


}