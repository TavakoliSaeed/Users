module.exports = function(app) {
  const controller = require("../controller/auth.controller.js");

  app.post("/api/auth/login", controller.login);
};