const express = require("express");

const cors = require("cors");

const mongoose = require("mongoose");
const username = "lusky75";
const password = "iiluskyii75";
const dbname = "test";

const url =
  "mongodb+srv://" +
  username +
  ":" +
  password +
  "@cluster0.tbkc4.mongodb.net/" +
  dbname +
  "?retryWrites=true&w=majority";

//const for routes
const userRoute = require("./src/routes/userRoute");
const productRoute = require("./src/routes/productRoute");
const commentaryRoute = require("./src/routes/commentaryRoute")

/*
    Connect to mongoose, framework of MongoDB
*/
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected: " + dbname))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());
app.use(
	cors({
		origin: true,
	})
);

// Added route for product methods
app.use("/user", userRoute);
app.use("/product", productRoute);
app.use("/commentary", commentaryRoute);

/*
  Added header for cors origin
*/
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

module.exports = app;
