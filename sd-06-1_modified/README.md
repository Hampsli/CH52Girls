# Instructions
Constructors are used to define a template for a new object type. The `new` operator will create a new instance of that object.

**Today, you will explore constructor functions, and teach yourselves how to create your own user-defined objects!**

For each of these tasks, type your code directly in the task file - the marking scripts will evaluate what you have written!

## Tasks

1. You have been presented with a constructor for a Mail object.
    * Modify the code so that the subject is the word `hello` and the message is the word `world`.

2. You have been presented with a constructor for a Mail object.
    * Modify the code so that the user provides their own subject and message as a execution parameters in that order.
    * Execution parameters are the values that are passed to a program when it is run.
    * For example, if the user runs the program with the command `node index.js 2 hello world`, then "node" is the program, "index.js" is the first parameter, "2" is the second parameter, and "hello" and "world" are the third and fourth parameters respectively.
    * You can access the execution parameters in your program by using the `process.argv` array.
    * In the example, the process and the first parameter (index 0 and 1 of the `process.argv` array) are "node" and "index.js", so you can ignore them.
    * The second parameter (index 2) is used by this program to determine the task number to execute, so you can ignore it as well.
    * You can access the subject and message by using `process.argv[3]` and `process.argv[4]` respectively.

3. You have been presented with a constructor for a Mail object.
    * Modify the code so that the user provides their own subject and message as execution parameters in that order.
    * Then, extend the constructor to include a printMail() method that prints the following to the Console:
        * `<subj>: <msg>`
        * For example, if the two inputs are `hello` and `world`, then the output should be `hello: world`.

4. For this task, you will need to write your own constructor.
    * Create a constructor called Journey that takes two parameters: start and end.
    * Create a pair of constants called from and to, and assign them the values from the command line arguments.


## Extra Tasks

If you have completed the above tasks, try the following extra tasks for a bonus challenge!

5. Create a constructor for a FriendsList object that will store a list of names in an array.
    * Your program should prompt the user for a number, then prompt that number of times to list each name one at a time.
    * Your program should then print the array directly to the console.
        * The output should look like this: `[ 'name1', 'name2' ]`

6. Can you create a constructor for an object to describe a shopping list? Use this task to experiment with constructors!
    * How long should the list be?
        * Not every user will want the same number of items.
    * How should you handle multiples of the same item, such as 2 bottles of milk, or a dozen eggs?
    * How would you collect this data from the user?
    * How would you store this data in an object?
    * What would the constructor function for this object look like?

7. Can you create a constructor for an object that can describe a car? Use this task to experiment with constructors!
    * Think about what data the object should have, how you would collect that data from the user, and how you would store it.
        * The make, model, and year?
        * The colour?
        * The number of doors?
        * The mileage?
        * Whether it's a combustion engine or electric?
        * Anything else?
