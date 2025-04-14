const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  expect(userController.getUsers()).toContain(user);
});

test("Verificar que un usuario no esté en la lista antes de agregarlo", () => {
  let user = new User(9999, "Carlos", "carlos@generation.org");

  // Antes de agregarlo, verificamos que NO esté en la lista
  expect(userController.getUsers()).not.toContain(user);
});

test('remove user to userController', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  userController.remove(user);
  expect(userController.users).not.toContain(user);
});

test("Intentar eliminar un usuario que no está en la lista", () => {
  let user = new User(5555, "Ana", "ana@generation.org");

  // Intentamos eliminarlo sin haberlo agregado antes
  userController.remove(user);

  // Verificamos que el usuario sigue sin estar en la lista
  expect(userController.getUsers()).not.toContain(user);
});

test("Encontrar usuario por email existente", () => {
  let user = new User(2222, "Laura", "laura@generation.org");
  userController.add(user);

  let foundUser = userController.findByEmail("laura@generation.org");
  
  expect(foundUser).toBe(user);
});

test("Buscar un email que no existe", () => {
  let foundUser = userController.findByEmail("noexiste@generation.org");
  
  expect(foundUser).toBeUndefined();
});

test("Encontrar usuario por ID existente", () => {
  let user = new User(3333, "Pedro", "pedro@generation.org");
  userController.add(user);

  let foundUser = userController.findById(3333);
  
  expect(foundUser).toBe(user);
});

test("Buscar un ID que no existe", () => {
  let foundUser = userController.findById(9999);
  
  expect(foundUser).toBeUndefined();
});



