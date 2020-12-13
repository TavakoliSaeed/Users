const db = require('../config/db.config.js');
const UserGroup = db.UserGroup;
const Users = db.users;

// Post a User Group
exports.creategroup = (req, res) => {  
    // Save to MsSQL database
    UserGroup.create({
        UserGroupName: req.body.UserGroupName
      })
      .then(newGroup => {
        res.send(newGroup);
      });

  };
 
// FETCH all User Group
exports.findAllgroup = (req, res) => {
    UserGroup.findAll({
        include: [
            {
              model: Users,
              as: "Users",
              attributes: ["id", "UsersName"],
              through: {
                attributes: [],
              }
            },
          ],
    }).then(usergroups => {
    // Send all User Group to Client
    res.send(usergroups);
  });

};

 
// Find a User Group by Id
exports.findbyUserGroupId = (req, res) => {  
    UserGroup.findById(req.params.usergroupid,
        {
            include: [
                {
                  model: Users,
                  as: "Users",
                  attributes: ["id", "UsersName"],
                  through: {
                    attributes: [],
                  }
                },
              ],
        }).then(usergroups => {
    res.send(usergroups);
  })
};
 
// Update a User Group
exports.updategroup = (req, res) => {
  const id = req.params.usergroupId;
  UserGroup.update( { UserGroupName: req.body.UserGroupName}, 
           { where: {id: req.params.usergroupId} }
           ).then(() => {
           res.status(200).send(`updated successfully a user group with id = ${id}`);
           });
};
 
// Delete a User Group by Id
exports.deletegroup = (req, res) => {
  const id = req.params.usergroupId;
  UserGroup.destroy({
    where: { id: req.params.usergroupId }
  }).then(() => {
    res.status(200).send(`deleted successfully a user group with id = ${id}`);
  });
};

exports.addUsers = (usergroupId, userId) => {
    return UserGroup.findByPk(usergroupId)
      .then((usergroup) => {
        if (!usergroup) {
          console.log("UserGroup not found!");
          return null;
        }
        return User.findByPk(usergroup).then((users) => {
          if (!users) {
            console.log("Users not found!");
            return null;
          }
  
          usergroup.addUser(users);
          console.log(`>> added User id=${users.id} to Tag id=${usergroup.id}`);
          return usergroup;
        });
      })
      .catch((err) => {
        console.log(">> Error while adding User to UserGroup: ", err);
      });
  };