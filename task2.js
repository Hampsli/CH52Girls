// Task 2: listUsers()
export async function listUsers() {
    try {
        const response = await fetch(`${getServerURL()}/users`);
        if (!response.ok) throw new Error("Error al obtener los usuarios");
        
        const users = await response.json();
        console.log(users);
    } catch (error) {
        console.error("Error en listUsers:", error.message);
    }
}
