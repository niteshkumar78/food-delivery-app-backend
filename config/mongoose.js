const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/food-dilevery-app");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error in connection!!"));

db.once("open", function () {
  console.log("sucessfully connected to db");
});
