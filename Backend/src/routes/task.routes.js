const express = require("express");
const taskController = require("../controllers/task.controller");

const router = express.Router();

router.post("/", taskController.usertask);

router.get("/", taskController.gettask);

router.delete("/", taskController.deleteAlltask);

router.delete("/:id", taskController.deleteOnetask);

module.exports = router;
