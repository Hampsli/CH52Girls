// Task 2: listUsers()
const axios = require('axios'); //hacer solicitudes HTTP

const listUsers = async () => {
  try {
    const response = await axios.get('http://localhost:3000/users'); 
    console.log(response.data); 
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
  }
};

module.exports = { listUsers };

