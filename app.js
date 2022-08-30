const express = require("express");
const app = express();

const userRoute = require("./routes/userRoute");
const categoryRoute = require("./routes/categoryRoute")
const adminRoute = require("./routes/adminRoute")
const productRoute = require("./routes/productRoute")
const cartRoute = require("./routes/cartRoute")

app.use("/user", userRoute);
app.use("/category", categoryRoute);
app.use("/admin", adminRoute);
app.use("/product", productRoute);
app.use("/cart", cartRoute);

module.exports = app;
