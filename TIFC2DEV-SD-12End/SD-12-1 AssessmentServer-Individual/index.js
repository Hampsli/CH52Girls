// DO NOT MODIFY THIS FILE!

// This Project contains your JSON server.

import { initDB } from './json-db-init.js';
import { jsonServer } from './json-server.js';

setTimeout(function () { console.log("Initialising Database..."); initDB() }, 100);

setTimeout(function () { console.log("Starting server..."); jsonServer() }, 2000);