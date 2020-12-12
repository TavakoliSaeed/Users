const db = require('../config/db.config.js');
const User = db.users;
 
// Post a User
exports.create = (req, res) => {  
  // Save to MsSQL database
  User.create({  
    UsersUserName: req.body.UsersUserName,
    UsersPassword: req.body.UsersPassword
  }).then(user => {    
    // Send created users to client
    res.send(user);
  });
};
 
// FETCH all User
exports.findAll = function (req, res) {
  User.findAlll().then(users => {
    // Send all users to Client
    res.send(users);
  });
};
 
// Find a User by Id
exports.findById = (req, res) => {  
    User.findById(req.params.userId).then(user => {
    res.send(user);
  })
};
 
// Update a User
exports.update = (req, res) => {
  const usersId = req.params.userId;
  User.update( { UsersUserName: req.body.UsersUserName, UsersPassword: req.body.UsersPassword }, 
           { where: {usersId: req.params.usersId} }
           ).then(() => {
           res.status(200).send("updated successfully a user with usersId = " + usersId);
           });
};
 
// Delete a User by Id
exports.delete = (req, res) => {
  const usersId = req.params.usersId;
  User.destroy({
    where: { usersId: usersId }
  }).then(() => {
    res.status(200).send('deleted successfully a user with usersId = ' + usersId);
  });
};