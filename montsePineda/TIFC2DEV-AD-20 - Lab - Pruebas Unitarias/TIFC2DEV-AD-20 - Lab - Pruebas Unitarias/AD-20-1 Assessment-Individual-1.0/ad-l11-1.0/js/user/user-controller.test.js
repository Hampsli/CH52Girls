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

//Tarea 2: Implementar pruebas para las clases de los módulos ./js/user/user.js y ./js/user/user-controller.js.

//Implementar 1 prueba para la función add() que verifica un usuario que no está en la lista de usuarios..
//Users es el array que es la lista de usuarios 

test('with add verify no user in user list before adding', ()=>{
  //Creamos el user
  let user = new User(123,"Elias","elias@gmail.com");
  //Verificar que a+un no está en users 
  expect(userController.users).not.toContain(user);
  //Se añade usuario
  userController.add(user);
  //Se espera encontrar usuario
  expect(userController.users).toContain(user);
})

//Implementar 1 prueba para la función remove() que verifica un usuario que no está en la lista de usuarios.
test('with remove verify no user in user list', ()=>{
  //Creamos el user
  let user = new User(456,"Chucho","Chucho@gmail.com");
  //Verificar que a+un no está en users 
  expect(userController.users).not.toContain(user);
  //Se añade usuario
  userController.add(user);
  //Se espera encontrar usuario
  expect(userController.users).toContain(user);
  //Eliminar usausrio
  userController.remove(user);
  //Verificar que ya no está de nuevo
  expect(userController.users).not.toContain(user);
})


//

//Implementar 2 pruebas unitarias para la función findByEmail().
test('find the email of a user by findByEmail',()=>{
  //Creamos el user
  let user = new User(123,"Elias","elias@gmail.com");
  //Se agrega el user al users
  userController.add(user);
  //Se hace la prueba donde se espera encontrar el usuario por medio de su email
  expect(userController.findByEmail("elias@gmail.com")).toEqual(user);
})
//2.Prueba falla 
//3.Corregir código el problema es en la prueba que no puse el email a buscar e hice uso de Equal porque al buscar por el email te debe dar toda la info del usuario, o sea, ser igual

//Segunda prueba
test('find the email of a user by findByEmail',()=>{
  //Creamos el user
  let user = new User(456,"Chucho","Chucho@gmail.com");
  //Se agrega el user al users
  userController.add(user);
  //Se hace la prueba donde se espera encontrar el usuario por medio de su email
  expect(userController.findByEmail("Chucho@gmail.com")).toEqual(user);
})


//Implementar 2 pruebas unitarias para la función findById().
test('find user by his id usign fn findById',()=>{
  //Creamos el user
  let user = new User(1125,"Bere","bere@gmail.com");
  //Se agrega el user al users
  userController.add(user);
  //Se hace la prueba donde se espera encontrar el usuario por medio de su id
  expect(userController.findById(1125)).toEqual(user);
})

//2.Falla #.Corrigo la prueba porque estoy mandando el id como string y es num
test('find user by his id usign fn findById',()=>{
  //Creamos el user
  let user = new User(44525,"Jorge","jorge@gmail.com");
  //Se agrega el user al users
  userController.add(user);
  //Se hace la prueba donde se espera encontrar el usuario por medio de su id
  expect(userController.findById(44525)).toEqual(user);
})