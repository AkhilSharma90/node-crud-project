const express = require("express");
const app = express();

const userRoute = require("./routes/userRoute");

const bodyParser = require("body-parser");

const cors = require("cors");


app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.use("/user", userRoute);

module.exports = app;
