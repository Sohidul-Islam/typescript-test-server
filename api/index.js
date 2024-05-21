require("dotenv").config();

const express = require("express");
const app = express();

const userRoutes = require("./controller/UserController");

// Create application/x-www-form-urlencoded parser

app.use(express.json());

app.use("/users", userRoutes);

app.get("/", function (req, res) {
  res.send("test");
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
