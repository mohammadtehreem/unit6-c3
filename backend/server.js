const express = require("express");
const app = express();
const mongoose = require("mongoose");
const reviewRouter = require("./routes/reviewRoute");
const detailsRouter = require("./routes/bookDetailsRoute");
require("dotenv").config();

const port = process.env.PORT;
const mongo_url = process.env.MONGO_URL;

app.use(express.json());

app.get("/review", reviewRouter);

app.get("details", detailsRouter);

app.get("/", (req, res) => {
  try {
    res.status(200).send("This is the home route");
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, (req, res) => {
  try {
    connectToDB(mongo_url);
  } catch (error) {
    res.status(500).send(error);
  }
});
