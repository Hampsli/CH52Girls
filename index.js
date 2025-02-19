// DO NOT MODIFY THIS FILE!

// Your 7 tasks are located in separate files.
// Open task1.js to begin.

let task;

if (process.argv[2]) {
  task = parseInt(process.argv[2]);
} else {
  const prompt = require("prompt-sync")();
  task = parseInt(prompt("Run task [1-7]: "));
};

switch(task) {
  case 1:
    require('./task1.js');
    break;
  case 2:
    require('./task2.js');
    break;
  case 3:
    require('./task3.js');
    break;
  case 4:
    require('./task4.js');
    break;
  case 5:
    require('./task5.js');
    break;
  case 6:
    require('./task6.js');
    break;
  case 7:
    require('./task7.js');
};