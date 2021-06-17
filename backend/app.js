/**
 * Core dependencies
 */
const express = require("express");
const path = require("path");

/**
 * Middleware dependencies
 */
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

/**
 * Routes
 */
const indexRouter = require("./routes/index");

/**
 * Application init
 */
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

/**
 * Set the main router
 */
app.use("/", indexRouter);

module.exports = app;
