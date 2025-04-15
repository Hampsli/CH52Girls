/* task 2
Ed would like a way to input the names of three of his friends.

* Export a class that will take 3 arguments to construct an object with 3 properties.
  * The 3 properties in the constructor should be called `name1`, `name2`, and `name3`. */

export class FriendNames {
    constructor(name1,name2,name3) {
      this.name1=name1;
      this.name2=name2;
      this.name3=name3;
    }
  }