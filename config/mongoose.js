const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/food-dilevery-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// mongoose.connect(
//   "mongodb+srv://admin-nitesh:Test@123@cluster0.af934.mongodb.net/todolistDB",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   }
// );

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error in connection!!"));

db.once("open", function () {
  console.log("sucessfully connected to db");
});
