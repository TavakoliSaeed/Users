const db = require('../config/db.config.js');
const User = db.users;
 
// Post a User
exports.create = (req, res) => {  
  // Save to MsSQL database
  User.create({  
    UsersName: req.body.UsersName,
    UsersPassword: req.body.UsersPassword
  }).then(user => {    
    // Send created users to client
    res.send(user);
  });
};
 
// FETCH all Users
exports.findAll = (req, res) => {
  User.findAll().then(users => {
    // Send all users to Client
    res.send(users);
  });
};

 
// Find a User by Id
exports.findbyUserId = (req, res) => {  
    User.findById(req.params.usersId).then(users => {
    res.send(users);
  })
};
 
// Update a User
exports.update = (req, res) => {
  const id = req.params.usersId;
  User.update( { UsersName: req.body.UsersName, UsersPassword: req.body.UsersPassword}, 
           { where: {id: req.params.usersId} }
           ).then(() => {
           res.status(200).send(`updated successfully a user with id = ${id}`);
           });
};
 
// Delete a User by Id
exports.delete = (req, res) => {
  const id = req.params.usersId;
  User.destroy({
    where: { id: req.params.usersId }
  }).then(() => {
    res.status(200).send('deleted successfully a user with id = ' + id);
  });
};