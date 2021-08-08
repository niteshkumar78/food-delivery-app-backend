const Users = require("../models/user");

module.exports.login = function (req, res, next) {
  Users.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("Error ", err);
      return res.status(400).json({
        message: "Internal Server Error",
      });
    }
    if (user) {
      if (user._doc.password === req.body.password) {
        return res.status(200).json({
          name: user._doc.name,
          email: user._doc.email,
          token: user._doc._id,
          message: "success",
        });
      } else {
        return res.status(400).json({
          message: "Incorrect password",
        });
      }
    } else {
      return res.status(200).json({
        message: "User not found, Please First",
      });
    }
  });
  //   return res.status(200).json({ ...req.body, message: "success login" });
};
