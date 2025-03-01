const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

//
test('Buscar un usuario por email', () => {
  const userController = new UserController();
  const user = { id: 1, name: "Alice", email: "alice@example.com" };
  userController.add(user);
  expect(userController.findByEmail("alice@example.com")).toEqual(user);
});
  


//

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });
//Funcionalidad: 1 prueba para la función add() que verifica un usuario que no está en la lista de usuarios.
test('verifica un usuario que no está en la lista de usuarios', () => {  
    let usuarioNuevo = new User(1515,"Maribel", "maribel@jirada.org");  
    userController.add(usuarioNuevo);
    expect(userController.users).toContainEqual(usuarioNuevo);
  });
//Funcionalidad:1 prueba para la función remove() que verifica un usuario que no está en la lista de usuarios. 
test('verifica un usuario que no está en la lista de usuarios', () => { 
    let usuarioRemove = new User(1515,"Maribel", "maribel@jirada.org");
    userController.remove(usuarioRemove);
    expect(userController.users).toContainEqual(usuarioRemove);
  });
//Funcionalidad: 2 pruebas unitarias para la función findByEmail().
test("encontrar un usuario por su email", () => {
    const userEmail = userController.findByEmail("santiago@generation.org");
    expect(userEmail).toBe(userEmail);
});
//revisar siguiente prueba no pasada
test("Debe devolver null si se busca con un email vacío", () => {
    const emailMayuscula = userController.findByEmail("");
    expect(emailMayuscula).toBeNull(); 
});
//Funcionalidad: 2 pruebas unitarias para la función findById().
test("verifica el nombre del usuario", () => {
  const resultadoID = userController.findById(1234);
  expect(resultadoID.name).toBe("Santiago");
});
test("verifica el email del usuario", () => {
    const resultadoEmail = userController.findById(1234);
    expect(resultadoEmail.email).toBe("santiago@generation.org");
});