const db = require('../config/db.config.js');
const config = require("../config/auth.config");
const user = db.users;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");



exports.login = (req, res) => {
  
    user.findOne({
    where: {
      UsersName: req.body.UsersName
    }
  })
    .then(users => {

      if (!users) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.UsersPassword,
        users.UsersPassword
      );


      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 28800 // 8 hours
      });

      // res.status(200);
      res.status(200).send({
              id: user.id,
              username: user.username,
              accessToken: token
            });

    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};