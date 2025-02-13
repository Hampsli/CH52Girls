// DO NOT MODIFY THIS FILE!

// Your 7 tasks are located in separate files.
// Open task1.js to begin.

import * as task1 from "./task1.js";
import * as task2 from "./task2.js";
import * as task3 from "./task3.js";
import * as task4 from "./task4.js";
import * as task5 from "./task5.js";
import * as task6 from "./task6.js";
import * as task7 from "./task7.js";

let task;

if (process.argv[3]) {
  task = parseInt(process.argv[2]);
} else {
  console.log("Please run your task file directly in node.")
  console.log("Example: node task1.js")
};

switch (task) {
  case 1:
    globalThis.costCalculator = task1.costCalculator;
    console.log(costCalculator(process.argv[3]));
    break;
  case 2:
    globalThis.FriendNames = task2.FriendNames;
    let inputNames = new FriendNames(process.argv[3], process.argv[4], process.argv[5]);
    console.log(inputNames);
    break;
  case 3:
    globalThis.ageCalculator = task3.ageCalculator;
    
    let y = process.argv[3];
    let m = process.argv[4];
    let d = process.argv[5];
    let learnerAnswer = ageCalculator(y, m, d);
    let today = new Date();
    let birthday = new Date(y, m, d);
    let age = today.getFullYear() - birthday.getFullYear();
    let theMonth = today.getMonth() - birthday.getMonth();

    if (theMonth < 0x0 || 0x0 === theMonth && today.getDate() < birthday.getDate()) {
      age--;
    }

    if (learnerAnswer === age) {
      console.log("Successful");
    }

    break;
  case 4:
    globalThis.FriendAge = task4.FriendAge;

    let name = process.argv[3];
    let year = process.argv[4];
    let month = process.argv[5];
    let day = process.argv[6];
    let friend = new FriendAge(name, year, month, day);
    let output = friend.returnAge();
    let today4 = new Date();
    let birthday4 = new Date(year, month, day);
    let age4 = today4.getFullYear() - birthday4.getFullYear();
    let month4 = today4.getMonth() - birthday4.getMonth();

    if (month4 < 0x0 || 0x0 === month4 && today4.getDate() < birthday4.getDate()) {
      age4--;
    }

    let testAnswer4 = "Kimi is " + age4 + " today!";

    if (output === testAnswer4) {
      console.log('Successful');
    }

    break;
  case 5:
    globalThis.rubricPassFail = task5.rubricPassFail;
    console.log(rubricPassFail(process.argv[3]));
    break;
  case 6:
    globalThis.rubricExcellent = task6.rubricExcellent;
    console.log(rubricExcellent(process.argv[3]));
    break;
  case 7:
    globalThis.rubricPerfect = task7.rubricPerfect;
    console.log(rubricPerfect(process.argv[3]));
}