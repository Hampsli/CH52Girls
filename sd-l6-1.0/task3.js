// Task 3: addUser(first_name, last_name, email)
const axios = require('axios');

const addUser = async (firstName, lastName, email) => {
  try {
    const usersResponse = await axios.get('http://localhost:3000/users'); 
    const newId = usersResponse.data.length + 1; 
    const newUser = { id: newId, firstName, lastName, email };

    await axios.post('http://localhost:3000/users', newUser); 
    console.log('Usuario agregado exitosamente:', newUser);
  } catch (error) {
    console.error('Error al agregar el usuario:', error);
  }
};

module.exports = { addUser };

