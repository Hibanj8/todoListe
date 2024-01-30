const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task.controller")

// GET ALL TASKS
router.get('/', taskController.getAllTasks);
// GET TASK BY ID
router.get('/:id', taskController.getTaskById);

// CREATE A NEW TASK
router.post('/', taskController.createTask);

// UPDATE TASK BY ID
router.put('/:id', taskController.updateTask);

// DELETE TASK
router.delete('/:id', taskController.deleteTask);

// ________________________________________________
// Exporting router
module.exports = router;