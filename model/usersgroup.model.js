module.exports = (sequelize, Sequelize) => {
    const UserGroup = sequelize.define('UserGroup', {
      UserGroupName: {
      type: Sequelize.STRING
      }
    });
    
  
  
    return UserGroup;
  }
  