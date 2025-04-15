const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test("add user to userController", () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  expect(userController.getUsers()).toContain(user);
});

test("remove user to userController", () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  userController.remove(user);
  expect(userController.users).not.toContain(user);
});

test("verificando si el usuario está en la lista de usuarios", () => {
  let userController = new UserController(); // Crear un nuevo usuario
  let newUser = new User(1234, "Santiago", "santiago@generation.org"); // Crear un nuevo usuario

  userController.add(newUser); // Agregar el nuevo usuario a la lista de usuarios
  expect(userController.getUsers()).toContain(newUser); // Verificar si el nuevo usuario está en la lista de usuarios
});

test("verificando si el usuario no está en la lista de usuarios", () => {
  let userController = new UserController(); // Crear un nuevo usuario
  let noUser = new User(4321, "Mauricio", "mauricio@generation.org"); // Crear un nuevo usuario

  userController.remove(noUser); // Eliminar el nuevo usuario de la lista de usuarios
  expect(userController.getUsers()).not.toContain(noUser); // Verificar si el nuevo usuario no está en la lista de usuarios
});

// prueba con el método findByEmail
test("buscar usuario por email", () => {
  let userController = new UserController(); // Crear un nuevo usuario
  let user = new User(1234, "Miranda", "miranda@generation.org"); // Crear un nuevo usuario
  userController.add(user); // Agregar el nuevo usuario a la lista de usuarios
  expect(userController.findByEmail("miranda@generation.org")).toEqual(user); // Verificar si el nuevo usuario está en la lista de usuarios
});

test("buscar usuario por email, pero no existe", () => {
  let userController = new UserController(); // Crear un nuevo usuario
  expect(userController.findByEmail("mario@generation.org")).toBeUndefined(); // Verificar si el nuevo usuario NO está en la lista de usuarios
});

// prueba con el método findById
test("buscar usuario por id", () => {
  let userController = new UserController(); // Crear un nuevo usuario
  let user = new User(1223, "Monse", "mon@generation.org"); // Crear un nuevo usuario
  userController.add(user); // Agregar el nuevo usuario a la lista de usuarios
  expect(userController.findById(1223)).toEqual(user); // Verificar si el nuevo usuario está en la lista de usuarios
});

test("buscar usuario por id no existe", () => {
  let userController = new UserController(); // Crear un nuevo usuario
  expect(userController.findById(5555)).toBeUndefined(); // Verificar si el nuevo usuario NO está en la lista de usuarios
});
