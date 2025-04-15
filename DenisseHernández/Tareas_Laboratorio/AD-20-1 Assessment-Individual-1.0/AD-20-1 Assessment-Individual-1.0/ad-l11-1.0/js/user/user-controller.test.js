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

  // mis pruebas
test('Verificar si el usuario no esta en la lista',()=>{
  let user = new User(1234,"Santiago", "santiago@generation.org");

  expect(userController.getUsers()).not.toContain(user); // verifica que no este en la lista

  userController.add(user); // lo agrega

  expect(userController.getUsers()).toContain(user); // verifica que ya este en la lista

})

test('Verifica que un usuario no esta en la lista',()=>{
  let user = new User(1234,"Santiago", "santiago@generation.org"); 
  expect(userController.getUsers()).not.toContain(user); // verifica que este en la lista 
  userController.remove(user);// si esta lo va a remover 
  expect(userController.getUsers()).not.toContain(user); // verifica que el usuario ya no sigue en la lista 
})

test('Verificar mi funcion encontrar por Email',()=>{
  const userController = new UserController(); // se crea una instancia limpia
  let user = new User(1234,"Santiago", "santiago@generation.org"); // datos del usuario

  userController.add(user); // se crea el nuevo usuario

  const foundUser = userController.findByEmail("santiago@generation.org"); // debe buscarlo por el Email

  expect(foundUser).toBe(user); // debe devolver el mismo usuario
})

test("Debe retornar null si el usuario no está en la lista", () => {
  const userController = new UserController();

  // Buscar un email que no existe
  const foundUser = userController.findByEmail("noexiste@generation.org");

  expect(foundUser).toBeNull(); // Debe retornar null
});

test('Verifica mi función de encontrar por ID', () => {
  const userController = new UserController(); // Se crea una nueva instancia limpia
  let user = new User(1234, "Santiago", "santiago@generation.org"); // Datos del usuario

  userController.add(user); // Agregar usuario

  const foundUser = userController.findById(1234); // Buscarlo por ID 

  expect(foundUser).toBe(user); // Debe devolver el usuario correcto
});

test("Debe retornar null si el usuario no está en la lista", () => {
  const userController = new UserController();

  // Buscar un Id que no existe
  const foundUser = userController.findById(1234);

  expect(foundUser).toBeNull(); // Debe retornar null
});

// el error fue que return null no estaba en los user-controller, entonces los agregue 