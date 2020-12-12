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
});

const db = {};
 
db.sequelize = sequelize;
 
db.users = require('../model/users.model.js')(sequelize, Sequelize);
 
module.exports = db;