module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define('Users', {
    UsersName: {
    type: Sequelize.STRING
    },
    UsersPassword: {
    type: Sequelize.STRING
    }
  });
  


  return Users;
}

