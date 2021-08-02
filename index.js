const express = require("express");
const app = express();

const db = require("./config/mongoose");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

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
