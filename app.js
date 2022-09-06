const express = require("express");
const app = express();

const userRoute = require("./routes/userRoute");
app.use("/user", userRoute);

module.exports = app;
