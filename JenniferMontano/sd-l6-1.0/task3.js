// Task 3: addUser(first_name, last_name, email)

export async function addUser(first_name, last_name, email) {
  try {
    const response = await fetch("http://localhost:3000/users");
    if (!response.ok) {
      throw new Error(`Error al obtener usuarios: ${response.status}`);
    }
    const users = await response.json();

    const newId =
      users.leght > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 1;

    const newUser = {
      id: newId,
      first_name,
      last_name,
      email,
    };

    const postResponse = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    if (!postResponse.ok) {
      throw new Error(`Error al agregar usuario: ${postResponse.status}`);
    }

    console.log(`Usuario agregado: ${JSON.stringify(newUser)}`);
  } catch (error) {
    console.error("Error:", error);
  }
}
