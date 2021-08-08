const express = require("express");

const routes = express.Router();

routes.use("/signup", require("./userSignup"));
routes.use("/login", require("./user_login"));
routes.use("/dishesList", require("./dishesList"));
routes.use("/profile", require("./userProfile"));
routes.use("/cart/payment", require("./razorpayOrderPayment"));
routes.use(
  "/cart/paymentConfirmation",
  require("./razorpayPaymentConfirmation")
);

module.exports = routes;
