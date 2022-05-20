"use strict";

const express = require("express");
const app = express();

// for route
const home = require("./routes/home");

// app setting
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home);

module.exports = app;
