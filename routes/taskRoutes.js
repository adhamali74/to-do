/** @format */

const express = require("express");
const router = express.Router();
const Task = require("../models/tasks");

router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/tasks", async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(200).json({ message: "Added task successfully!!", task });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
