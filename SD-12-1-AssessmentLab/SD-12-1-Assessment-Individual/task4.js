// Task 4: delUser(number)

export function delUser(number) {
    const url = `http://localhost:3000/users/${number}`;
    
    fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(response => {
        if(!response.ok) {
            throw new Error("Error performing DELETE request");
        }
        console.log(`Usser ${number} deleted successfully`);
    })
    .catch((error) => {
        console.error("Error deleting user:", error);
    });
}

console.log(delUser(1));