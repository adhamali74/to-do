/** @format */

const express = require("express");
const mongoose = require("mongoose");
const tasksRoutes = require("./routes/taskRoutes");

const app = express();
const port = 5000;

app.use(express.json());

mongoose.connect("mongodb://admin:admin@localhost:27017/todo?authSource=admin");

const db = mongoose.connection;

db.on("error", () => {
  console.log("Connection Error");
});
db.once("open", () => {
  console.log("Connection Successfully established!");
});

app.use(tasksRoutes);

app.listen(port, () => {
  console.log("Listen on port " + port + "!");
});
