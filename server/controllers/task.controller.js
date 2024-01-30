const db = require("../models");

const Task = db.tasks;
// ________________________________________________
// Route to get all tasks
exports.getAllTasks = async (req, res) => {
    try {
      const tasks = await Task.find({ deletedAt: null });
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
 
// ________________________________________________
// Route to get a task by ID
exports.getTaskById = async (req, res) => {
    try {
      const task = await Task.findOne({ _id: req.params.id, deletedAt: null });
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json(task);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

// ________________________________________________
// Creating a new task
exports.createTask = async (req, res) => {
    try {
        const { title, priority, status, description, deletedAt, createdBy, deadline, comments } = req.body;
        const newTask = new Task({
            title,
            priority,
            status,
            description,
            deletedAt, 
            createdBy,
            deadline,
            comments
        });
        const findTask =await Task.findOne({ title });
        if (findTask){
            res.status(400).send('Task already exists');
            return
        }
        const savedTask = await newTask.save();
        res.json(savedTask);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// ________________________________________________
// Updating

exports.updateTask = async (req, res) => {
    try {
      const updatedTask = await Task.findOneAndUpdate(
        { _id: req.params.id, deletedAt: null },
        req.body,
        { new: true }
      );
      if (!updatedTask) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json(updatedTask);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

// ________________________________________________
// Delete task

exports.deleteTask = async (req, res) => {
    try {
      const deletedTask = await Task.findOneAndUpdate(
        { _id: req.params.id, deletedAt: null },
        { deletedAt: new Date() },
        { new: true }
      );
      if (!deletedTask) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json(deletedTask);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };