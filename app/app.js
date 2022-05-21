"use strict";

const express = require("express");
const app = express();

// for route
const home = require("./src/routes/home");

// app setting
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

app.use("/", home);

module.exports = app;

// 다음에 우리밋 15번 영상부터 시청
