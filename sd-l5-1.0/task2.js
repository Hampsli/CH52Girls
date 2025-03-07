export class FriendNames {
  constructor(nombre1, nombre2, nombre3) {
    this.name1 = nombre1;
    this.name2 = nombre2;
    this.name3 = nombre3;
  }
}

const fn = new FriendNames('Karim', 'Uli', 'Georgina');
console.log(fn);