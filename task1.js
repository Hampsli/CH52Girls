// Task 1: getServerU
export function getServerURL() {
    return "http://localhost:3000"; 
}

import { getServerURL } from "./getServerURL.js";

console.log("La URL del servidor es:", getServerURL());
