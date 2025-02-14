// Task 3: addUser(first_name, last_name, email)

import axios from "axios";

const SERVER_URL = "http://localhost:3000/users"; // URL del servidor JSON

const addUser = async (firstName, lastName, email) => {
  try {
    // Obtener la lista de usuarios actuales
    const response = await axios.get(SERVER_URL);
    const users = response.data;

    // Obtener el último ID y calcular el nuevo
    const newId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;

    // Crear el nuevo usuario
    const newUser = {
    id: newId,
    firstName,
    lastName,
    email
    };

    // Enviar la solicitud POST al servidor JSON
    await axios.post(SERVER_URL, newUser);

    console.log("✅ Usuario agregado con éxito:", newUser);
} catch (error) {
    console.error("❌ Error al agregar usuario:", error.message);
}
};

// Ejecutar la función directamente
addUser("Yesi", "Machado", "Yesi.machado@email.com");