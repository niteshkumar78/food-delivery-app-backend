const express = require("express");

const routes = express.Router();

routes.use("/signup", require("./userSignup"));

module.exports = routes;
