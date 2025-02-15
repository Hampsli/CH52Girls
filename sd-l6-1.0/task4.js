
fetch('http://localhost:3000/users', {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(result => console.log('Deleted:', result));
  
