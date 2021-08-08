const express = require("express");

const routes = express.Router();

const razorpayController = require("../controllers/razorPay_Controller");

routes.post("/", razorpayController.paymentConfirmation);

module.exports = routes;
