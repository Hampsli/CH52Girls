// Task 2: listUsers()
// Importa fetch desde 'node-fetch' si estás usando Node.js
import fetch from 'node-fetch';

export async function listUsers() {
  const response = await fetch("http://localhost:3000/users");
  const users = await response.json();
  console.log(users);
}

export default listUsers;
