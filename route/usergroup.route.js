const { authJwt } = require("../middleware");

module.exports = function(app) {
 
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });

    const usergroup = require('../controller/usergroup.controller.js');
 
    // Create a new User Group
    app.post('/api/usergroup', authJwt.verifyToken, usergroup.creategroup);
 
    // Fetch all User Group
    app.get('/api/usergroup', authJwt.verifyToken, usergroup.findAllgroup);
 
    // Fetch a single User Group by Id
    app.get('/api/usergroup/:usergroupId', authJwt.verifyToken, usergroup.findbyUserGroupId);
 
    // Update a User Group with Id
    app.put('/api/usergroup/:usergroupId', authJwt.verifyToken, usergroup.updategroup);
 
    // Delete a User Group with Id
    app.delete('/api/usergroup/:usergroupId', authJwt.verifyToken, usergroup.deletegroup);
}