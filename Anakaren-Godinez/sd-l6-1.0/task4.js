// Task 4: delUser(number)
const axios = require('axios');

const delUser = async (id) => {
  try {
    await axios.delete(`http://localhost:3000/users/${id}`); 
    console.log(`Usuario con id ${id} eliminado exitosamente`);
  } catch (error) {
    console.error('Error al eliminar el usuario:', error);
  }
};

module.exports = { delUser };

