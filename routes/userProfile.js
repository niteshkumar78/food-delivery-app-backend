const express = require("express");

const routes = express.Router();

const userProfileController = require("../controllers/userProfileController");

routes.get("/", userProfileController.userProfile);

module.exports = routes;
