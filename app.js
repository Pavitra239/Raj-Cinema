const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/db.config");

require("dotenv").config();

const app = express();

console.log(config.uri);
mongoose
  .connect(config.uri)
  .then(() => {
    console.log("Connected To Database");
    app.listen(process.env.PORT || 8000, () => {
      console.log("Conection Established");
      console.log(`Server is running on port ${config.port}`);
    });
  })
  .catch((err) => {
    console.log(err);
    console.log("Error in connecting to database");
    process.exit(1);
  });
