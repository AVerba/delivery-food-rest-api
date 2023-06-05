const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const userRouter = require("./src/routes/api/auth");
const orderRouter = require("./src/routes/api/orders");
const couponRouter = require("./src/routes/api/coupons");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use('/api/auth', userRouter);
app.use('/api/orders', orderRouter);
app.use('/api/coupons', couponRouter);

app.use((req, res) => {
    res.status(404).json({message: "Not found"});
});

app.use((err, req, res, next) => {
    const {status = 500, message = "Server error"} = err;
    res.status(status).json({message});
});

module.exports = app;
