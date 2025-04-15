const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  test("Agregar un usuario que no está en la lista", () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);
    expect(userController.getUsers()).toContain(user);
  });

  test("Intentar eliminar un usuario que no está en la lista", () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");
    expect(() => userController.remove(user)).not.toThrow();
    expect(userController.getUsers()).not.toContain(user);
});

test("Buscar usuario por email - usuario existente", () => {
    let user = new User(5678, "Alice", "alice@example.com");
    userController.add(user);
    expect(userController.findByEmail("alice@example.com")).toEqual(user);
});

test("Buscar usuario por email - usuario no encontrado", () => {
    expect(userController.findByEmail("noexiste@example.com")).toBeUndefined();
});

test("Buscar usuario por ID - usuario existente", () => {
    let user = new User(9999, "Bob", "bob@example.com");
    userController.add(user);
    expect(userController.findById(9999)).toEqual(user);
});

test("Buscar usuario por ID - usuario no encontrado", () => {
    expect(userController.findById(8888)).toBeUndefined();
});
