require("dotenv").config();

const express = require("express");
const app = express();

// Create application/x-www-form-urlencoded parser

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.send("test");
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
