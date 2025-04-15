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

//test funcion add() usuario que no esta en la lista

test("verifica un usuario que no esta en la lista de usuarios y lo agrega", () =>{
  let user = new User(1235,"Ana", "ana@generation.org");
  userController.add(user);
  expect(userController.findById(1235)).toEqual(user);
})

//test funcion remove() verifica un usuario que no esta en la lista de usuarios
test("verifica un usuario que no esta en la lista de usuarios", () => {
  let user1 = new User(1234, "Santiago", "santiago@generation.org");
  let user2 = new User(1235, "Ana", "ana@generation.org");

  userController.add(user1);  
  userController.remove(user2);  

  expect(userController.getUsers()).toContain(user1); 
  expect(userController.getUsers()).not.toContain(user2); 
})

//buscar usuario por correo electrónico
test("busca al usuario por correo electronico", () => {
  let user1 = new User(1234, "Santiago", "santiago@generation.org");
  let user2 = new User(1235, "Ana", "ana@generation.org");

  userController.add(user1);
  userController.add(user2);

  // verifica que el usuario con el correo electrónico correcto es encontrado
  expect(userController.findByEmail("santiago@generation.org")).toEqual(expect.objectContaining({
    email: "santiago@generation.org",
    name: "Santiago"
  }));

  expect(userController.findByEmail("ana@generation.org")).toEqual(expect.objectContaining({
    email: "ana@generation.org",
    name: "Ana"
  }));
});

//correo electrónico que no existe
test("busca usuarios con correo electronico que no existe", () => {
  let user1 = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user1);
  expect(userController.findByEmail("nonexistent@generation.org")).toBeUndefined();
});

//buscar usuario por ID que existe
test("busca al usuario por ID que existe", () => {
  let user1 = new User(1234, "Santiago", "santiago@generation.org");
  let user2 = new User(1235, "Ana", "ana@generation.org");

  userController.add(user1);
  userController.add(user2);

  expect(userController.findById(1234)).toEqual(expect.objectContaining({
    id: 1234,
    name: "Santiago",
    email: "santiago@generation.org"
  }));

  expect(userController.findById(1235)).toEqual(expect.objectContaining({
    id: 1235,
    name: "Ana",
    email: "ana@generation.org"
  }));
});

//buscar usuario por ID que no existe
test("busca al usuario por ID que no existe", () => {
  let user1 = new User(1234, "Santiago", "santiago@generation.org");
  let user2 = new User(1235, "Ana", "ana@generation.org");

  userController.add(user1);
  userController.add(user2);

  expect(userController.findById(9999)).toBeUndefined();  // ID no existente
});