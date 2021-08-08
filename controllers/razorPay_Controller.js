const crypto = require("crypto");

const razorpay = require("../config/razorpay");
const Users = require("../models/user");

module.exports.paymentController = function (req, res, next) {
  Users.findById(req.header("authorization"), (err, user) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        message: "Internal Server Error",
      });
    }
    if (user) {
      let options = {
        amount: req.body.amount * 100,
        currency: "INR",
      };

      razorpay.razorpay.orders.create(options, (err, order) => {
        console.log(order);
        return res.status(200).json(order);
      });
    } else {
      res.status(400).json({
        message: "User not found",
      });
    }
  });
};

module.exports.paymentConfirmation = function (req, res, next) {
  Users.findById(req.header("authorization"), (err, user) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        message: "Internal Server Error",
      });
    }

    console.log(req.body.razorpayPaymentId);

    if (user) {
      razorpay.razorpay.payments
        .fetch(req.body.razorpayPaymentId)
        .then((result) => {
          console.log(result);
          if (result.status === "captured") {
            return res.status(200).json({
              message: "success",
            });
          } else {
            return res.status(200).json({
              message: "failed",
            });
          }
        })
        .catch((err) => {
          console.log(err);
          return res.status(400).json({
            message: "Internal Server Error",
          });
        });
    } else {
      res.status(400).json({
        message: "User not found",
      });
    }
  });
};
