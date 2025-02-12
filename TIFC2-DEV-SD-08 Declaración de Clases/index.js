// DO NOT MODIFY THIS FILE!

// Your 7 tasks are located in separate files.
// Open task1.js to begin.

import promptSync from "prompt-sync";

import * as task1 from "./task1.js";
import * as task2 from "./task2.js";
import * as task3 from "./task3.js";
import * as task4 from "./task4.js";
import * as task5 from "./task5.js";
import * as task6 from "./task6.js";
import * as task7 from "./task7.js";

let task;

if (process.argv[2]) {
  task = parseInt(process.argv[2]);
} else {
  const prompt = promptSync();
  task = parseInt(prompt("Run task [1-7]: "));
};

switch (task) {
  case 1:
    globalThis.Player = task1.Player;
    const player1 = new Player("Grog", 4);
    console.log(player1);
    break;
  case 2:
    globalThis.Player = task2.Player;
    const player2 = new Player("Grog", 4);
    console.log(player2);
    break;
  case 3:
    globalThis.Player = task3.Player;
    const player3 = new Player("Grog", 4);
    console.log(player3.info());
    break;
  case 4:
    globalThis.Player = task4.Player;
    const player4 = new Player("Grog", 4);
    console.log(player4.info());
    player4.levelUp();
    console.log(player4.info());
    break;
  case 5:
    globalThis.Player = task5.Player;
    const player5 = new Player("Grog", 4);
    console.log(player5);
    break;
  case 6:
    globalThis.Player = task6.Player;
    const player6 = new Player("Grog", 4);
    console.log(player6);
    break;
  case 7:
    globalThis.Player = task7.Player;
    const player7 = new Player("Grog", 4);
    console.log(player7);
};
