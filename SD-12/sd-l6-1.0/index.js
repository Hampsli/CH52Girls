// DO NOT MODIFY THIS FILE!

// Your 4 tasks are located in separate files.
// Open task1.js to begin.

import * as task1 from "./task1.js";
import * as task2 from "./task2.js";
import * as task3 from "./task3.js";
import * as task4 from "./task4.js";

let task;

if (process.argv[2]) {
  task = parseInt(process.argv[2]);
} else {
  console.log("Please run your task file directly in node.")
  console.log("Example: node task1.js")
};

switch (task) {
  case 1:
    globalThis.getServerURL = task1.getServerURL;
    fetch(getServerURL() + "/test.json").then(response => response.json()).then(data => console.log(data));
    break;
  case 2:
    globalThis.listUsers = task2.listUsers;
    listUsers();
    break;
  case 3:
    globalThis.getServerURL = task1.getServerURL;
    globalThis.addUser = task3.addUser;
    addUser("Kai", "Nathaniel", "kai.n@example.org");
    setTimeout(function () { fetch(getServerURL() + "/users/6").then(response => response.json()).then(data => console.log(data)); }, 2000);
    break;
  case 4:
    globalThis.getServerURL = task1.getServerURL;
    globalThis.delUser = task4.delUser;
    delUser(6);
    delUser(5);
    setTimeout(function () { fetch(getServerURL() + "/users").then(response => response.json()).then(data => console.log(data)); }, 2000);
}