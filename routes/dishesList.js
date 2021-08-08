const express = require("express");

const routes = express.Router();

const DishesListController = require("../controllers/dishes_controller");

routes.get("/", DishesListController.DishList);

module.exports = routes;
