/** @format */

const express = require("express");
const router = express.Router();
const Task = require("../models/tasks");

router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).send.json(tasks);
  } catch (err) {
    res.status(500).send.json({ error: err.message });
  }
});

module.exports = router;
