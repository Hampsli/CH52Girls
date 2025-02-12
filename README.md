# Instructions
Classes are an alternative syntax for defining a **template** for constructing objects. Like constructor functions, they can be used to construct objects with their **own** set of properties and methods. Like prototypes, they also allow for objects to **inherit** them. Class **constructor methods** are used to create an instance of a class. **Shared methods** are inherited by each instance.

**Today, you will be defining classes, initialising objects with properties, and acting on those properties with methods!**

For each of these tasks, you will be building and iterating on your solution for the previous task.


## Tasks

1. You are working on code that will be used in a video game. You have been asked to create an object class. These will be used to define players in that game. Each player can choose their own name, and these objects will be used to store them.
    * Modify the Player class so that it will accept a Player "**name**" in an argument.
        * The key of this property in the resulting object **must** be "`name`" - remember, **computers are very literal**!


2. You have now been asked to improve your code, so that the player objects can define both a name and a level number.
    * Modify the Player class so that it will accept a Player "name" string and a "**level**" number in two separate arguments.
        * The key of this property in the resulting object **must** be "`level`" - remember, **computers are very literal**!


3. You have now been asked to include a method that will output a string to the console announcing a level up.
    * Modify the Player class so that it will accept a player name string and a level number in two separate arguments.
    * Then, define a shared object method `info()` that will print the following string, replacing the two placeholders:
        * `<name> has reached Level <level>!`
            * A player named **Tara** at level **6** should result in "`Tara has reached Level 6!`" printed to the console.


4. You have now been asked to include a method for levelling a player up, increasing their level number by one.
    * Modify the Player class so that it will accept a Player name string and a level number in two separate arguments.
    * Then, define a shared object method `info()` that will output the following string:
        * `<name> has reached Level <level>`!
    * Finally, define a second shared object method named `levelUp()` that will **increment** the level of the Player.

## Extra Tasks

If you have completed the above tasks, try the following extra tasks to **experiment** further!

5. Experiment with allowing the player to level up based on gained experience points.
    * An experience point is a **number**. A level up should occur when a player gains enough experience points.
    * Try adding a method to allow a player to gain a given number of experience points.
    * How many experience points should result in a level up? How can you keep track of this number?


6. Experiment with allowing constructed player objects to be added to an **array** of party members.
    * How should an array of party members be identified in your code?
    * Try adding methods to add or remove player objects from a given party.


7. Experiment with allowing the player to have an inventory of items.
    * Try adding methods to add or remove items from an inventory.
    * How can you keep track of the quantity of each item? What **data structure** would you need for this?