const express = require("express");
const taskModel = require("./models/task.model");
const cors = require("cors");

const app = express();

app.use(express.json()); //MiddleWare

app.use(cors({ origin: "http://localhost:5173" }));

//Task-Post Method

app.post("/task", async (req, res) => {
  const Data = req.body;

  await taskModel.create({
    title: Data.title,
  });

  res.status(201).json({
    message: "Task Created",
  });
});

// Task-Get Method;

app.get("/task", async (req, res) => {
  const task = await taskModel.find();

  res.status(200).json({
    message: "Task Fetch",
    task: task,
  });
});

// Clear All Task
app.delete("/task", async (req, res) => {
  await taskModel.deleteMany({});

  res.status(200).json({
    message: "Clear All Task",
  });
});

// Task-Deleted Method

app.delete("/task/:id", async (req, res) => {
  const id = req.params.id;

  await taskModel.findOneAndDelete({
    _id: id,
  });
  res.status(200).json({
    message: "notes deleted",
  });
});

module.exports = app;
