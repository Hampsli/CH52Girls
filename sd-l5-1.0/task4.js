export class FriendAge {
    constructor(name, anio, mes, dia) {
      this.name = name;
      this.anio = anio;
      this.mes = mes;
      this.dia = dia;
    }
  
    returnAge() {
      const fechaDeNacimiento = new Date(this.anio, this.mes - 1, this.dia);
      const fechaActual = new Date();
  
      let edad = fechaActual.getFullYear() - fechaDeNacimiento.getFullYear();
  
      const mesActual = fechaActual.getMonth();
      const diaActual = fechaActual.getDate();
  
      if (
        mesActual < fechaDeNacimiento.getMonth() ||
        (mesActual === fechaDeNacimiento.getMonth() &&
          diaActual < fechaDeNacimiento.getDate())
      ) {
        edad--;
      }
      return `${this.name} is ${edad} today!`;
    }
  }