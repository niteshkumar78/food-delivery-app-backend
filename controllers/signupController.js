const Users = require("../models/user");

module.exports.signup = function (req, res) {
  console.log(req.body, req.header("authorization"));
  Users.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log(`Error : ${err}`);
      return res.status(200).json({
        message: "Internal Server Error",
      });
    }
    if (!user) {
      Users.create(req.body, function (err, user) {
        if (err) {
          console.log(`Error : ${err}`);
          return res.status(200).json({
            message: "Internal Server Error",
          });
        }

        return res
          .status(200)
          .json({ token: user._doc._id, message: "success" });
      });
    } else {
      return res.status(200).json({
        message: "User Already exist",
      });
    }
  });
  // console.log(req.body);
  // return res.status(200).json({ ...req.body, status: "Success" });
};
