module.exports = function(app) {
 
    const users = require('../controller/user.controller.js');
 
    // Create a new User
    app.post('/api/users', users.create);
 
    // Fetch all User
    app.get('/api/users', users.findAll);
 
    // Fetch a single User by Id
    app.get('/api/users/:usersId', users.findById);
 
    // Update a User with Id
    app.put('/api/users/:usersId', users.update);
 
    // Delete a User with Id
    app.delete('/api/users/:usersId', users.delete);
}