const Sequelize = require('sequelize');
 
const sequelize = new Sequelize("Warehouse", "sa", "123", {
  dialect: "mssql",
  host: "localhost",
  port: 1433,
  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000 
  },
  define: {
    timestamps: false
  },
});

const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.users = require('../model/users.model.js')(sequelize, Sequelize);
db.UserGroup = require('../model/usersgroup.model.js')(sequelize, Sequelize);
 
db.UserGroup.belongsToMany(db.users, {
  through: "Users_UserGroup",
  as: "Users",
  foreignKey: "Usergroup_id",
});
db.users.belongsToMany(db.UserGroup, {
  through: "Users_UserGroup",
  as: "UserGroup",
  foreignKey: "Users_id",
});


module.exports = db;