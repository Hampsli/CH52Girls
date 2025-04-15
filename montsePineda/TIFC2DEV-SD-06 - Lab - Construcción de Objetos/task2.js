/* TASK 2
* Modify the code so that the user provides their own subject and message as a execution parameters in that order.
* Execution parameters are the values that are passed to a program when it is run.
* For example, if the user runs the program with the command `node index.js 2 hello world`, then "node" is the program, 
  "index.js" is the first parameter, "2" is the second parameter, and "hello" and "world" are the third and fourth parameters respectively.
* You can access the execution parameters in your program by using the `process.argv` array.
* In the example, the process and the first parameter (index 0 and 1 of the `process.argv` array) are "node" and "index.js",
   so you can ignore them.
* The second parameter (index 2) is used by this program to determine the task number to execute, so you can ignore it as well.
* You can access the subject and message by using `process.argv[3]` and `process.argv[4]` respectively. */


function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
  }
  
  // Type your code below this line!
  const subject = process.argv[3]; //Para acceder al subject
  const message = process.argv[4]; //Para acceder al message

  const newMail = new Mail(subject,message )
  
  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message)