const Users = require("../models/user");
// const Restaurants = require("../models/restaurants");
const Dishes = require("../models/Dish");

module.exports.DishList = function (req, res, next) {
  Users.findById(req.header("authorization"), function (err, user) {
    if (err) {
      console.log(err);
      return res.status(400).json({
        message: "Internal Server Error",
      });
    }

    if (user) {
      Dishes.find({}, function (err, dish) {
        if (err) {
          console.log(err);
          return res.status(400).json({
            message: "Internal Server Error",
          });
        }
        console.log(dish);

        var dishesArray = [];
        dish.forEach((ress) => {
          const document = {
            image: ress.image,
            name: ress.name,
            description: ress.description,
            price: ress.price,
            qty: 0,
          };
          dishesArray.push(document);
        });

        return res.status(200).json(dishesArray);
      });
    } else {
      return res.status(400).json({
        message: "User not found",
      });
    }
  });
};
