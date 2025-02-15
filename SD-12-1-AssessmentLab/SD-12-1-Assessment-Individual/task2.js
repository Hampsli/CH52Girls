export async function listUsers() {
  const url = 'http://localhost:3000/users';
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    const users = await response.json();
    console.log(users);

  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    
  }
}

console.log(listUsers());