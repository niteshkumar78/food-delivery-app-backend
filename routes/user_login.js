const expres = require("express");

const routes = expres.Router();

const loginController = require("../controllers/login_controller");

routes.post("/", loginController.login);

module.exports = routes;
