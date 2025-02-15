// Task 2: listUsers()

export async function listUsers() {
    const SERVER_URL = "http://localhost:3000/users";

    try {
        const response = await fetch(SERVER_URL);
        if (!response.ok) throw new Error("Error al obtener la lista de usuarios");
        
        const users = await response.json();
        console.log("Lista de usuarios:", users);
    } catch (error) {
        console.error("Error en listUsers:", error);
    }
}
