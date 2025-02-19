// Task 3: addUser(first_name, last_name, email)
export async function addUser(first_name, last_name, email) {
    try {
        const usersResponse = await fetch(`${getServerURL()}/users`);
        if (!usersResponse.ok) throw new Error("Error al obtener la lista de usuarios");

        const users = await usersResponse.json();
        const newId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;

        const response = await fetch(`${getServerURL()}/users`, {
            method: "POST",
            body: JSON.stringify({
                id: newId,
                first_name,
                last_name,
                email
            }),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        });

        if (!response.ok) throw new Error("Error al agregar usuario");
        console.log(`Usuario agregado con ID: ${newId}`);
    } catch (error) {
        console.error("Error en addUser:", error.message);
    }
}

