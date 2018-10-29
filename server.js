require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

const server = app.listen(port, err => {
  if (err) {
    console.error("Webserver error listening on port: ", port);
    return process.exit();
  }
  console.log("Webserver listening on port: ", port);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/health", (req, res) => res.sendStatus(200));
app.use("/", express.static(path.join(__dirname, "build")));
app.use("/*", express.static(path.join(__dirname, "build")));

module.exports = server;
