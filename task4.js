// Task 4: delUser(number)
export async function delUser(id) {
    try {
        const response = await fetch(`${getServerURL()}/users/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) throw new Error("Error al eliminar usuario");
        console.log(`Usuario con ID ${id} eliminado exitosamente`);
    } catch (error) {
        console.error("Error en delUser:", error.message);
    }
}

