const express = require("express");

const routes = express.Router();

const signupController = require("../controllers/signupController");

// routes.use("/", require("./userSignup"));

routes.post("/", signupController.signup);

module.exports = routes;
