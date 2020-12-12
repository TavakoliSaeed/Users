module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define('Users', {
        UsersUserName: {
      type: Sequelize.STRING
      },
      UsersPassword: {
      type: Sequelize.STRING
      }
    }
    // ,
    // {
    //   timestamps: true,
    //   createdAt: false,
    //   updatedAt : false
    // }
  );
    
    return Users;
  }