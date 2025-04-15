const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  expect(userController.getUsers()).toContain(user);
});

test('remove user to userController', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);
  userController.remove(user);
  expect(userController.users).not.toContain(user);
});

test('Encuentra un usuario por email', () => {
  const user = userController.findByEmail('test3@example.com');
  expect(user).toBeUndefined();

});

test('Devuelve indefinido para un email que no existe', () => {
  const user = userController.findByEmail('paospinoza1@gmail.com');
  expect(user).toBeUndefined();
});

test('Encuentra un usuario por ID', () => {
  const user = userController.findById(5);
  expect(user).toBe();
});

test('Devuelve undefined para un ID que no existe', () => {
  const user = userController.findById(999);
  expect(user).toBe();
});



