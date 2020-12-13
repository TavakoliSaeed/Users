const { authJwt } = require("../middleware");

module.exports = function(app) {

    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });

    const users = require('../controller/user.controller.js');
 
    // Create a new User
    app.post('/api/users', users.create);
 
    // Fetch all User
    app.get('/api/users', authJwt.verifyToken, users.findAll);
 
    // Fetch a single User by Id
    app.get('/api/users/:usersId', authJwt.verifyToken,users.findbyUserId);
 
    // Update a User with Id
    app.put('/api/users/:usersId', authJwt.verifyToken,users.update);
 
    // Delete a User with Id
    app.delete('/api/users/:usersId', authJwt.verifyToken,users.delete);
}