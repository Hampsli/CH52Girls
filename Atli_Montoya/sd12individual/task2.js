import { getServerURL } from "./task1.js";

// Task 2: listUsers()
export async function listUsers() {
    const response = await fetch(getServerURL() + "/users");
    const users = await response.json();
    console.log(users);
}

