module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define('users', {
    UsersName: {
    type: Sequelize.STRING
    },
    UsersPassword: {
    type: Sequelize.STRING
    }
  });
  


  return Users;
}

