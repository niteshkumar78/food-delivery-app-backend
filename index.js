const express = require("express");
const app = express();
// const bodyParser = require("body-parser");

const db = require("./config/mongoose");
const Users = require("./models/user");

// const cors = require("cors");
// const Dish = require("./models/Dish");

// const test = {
//   image:
//     "https://www.indianhealthyrecipes.com/wp-content/uploads/2012/11/gulab-jamun-recipe.jpg",
//   name: "Gulab jamun",
//   description: "Good quality and tasty",
//   price: 200,
// };

// Dish.create(test, function (err, user) {});
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use("/", require("./routes/index"));
// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "Hello World",
//   });
// });

app.listen(8000, (err) => {
  if (err) {
    console.log(err);
  }

  console.log("app is running on port 8000");
});
