const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const cors = require("cors");
const userRoute = require("./routes/userRoute");
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/user", userRoute);

module.exports = app;
