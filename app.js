const express = require("express");
const app = express();

const userRoute = require("./routes/userRoute");
const categoryRoute = require("./routes/categoryRoute")
const adminRoute = require("./routes/adminRoute")

app.use("/user", userRoute);
app.use("/category", categoryRoute);
app.use("/admin", adminRoute);

module.exports = app;
