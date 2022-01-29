require("dotenv").config();

const express = require("express");
const app = express();
// const bodyParser = require("body-parser");

const db = require("./config/mongoose");
const Users = require("./models/user");

// const cors = require("cors");
// const Dish = require("./models/Dish");

// const test = {
//   image: "https://images.herzindagi.info/image/2018/Oct/biryani-delhi-main.jpg",
//   name: "Biryani",
//   description: "Jucy picles, Rich Spices, aromatic basmati",
//   price: 300,
// };

// Dish.create(test, function (err, user) {});
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static(__dirname + "/public"));

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

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }

  console.log("app is running on port ", PORT);
});
