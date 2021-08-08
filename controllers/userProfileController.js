const Users = require("../models/user");

module.exports.userProfile = function (req, res, next) {
  Users.findById(req.header("authorization"), (err, user) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        message: "Internal server Error",
      });
    }

    if (user) {
      return res.status(200).json({
        name: user._doc.name,
        email: user._doc.email,
        message: "success",
      });
    } else {
      return res.status(200).json({
        message: "Invalid Token",
      });
    }
  });
};
