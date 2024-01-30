const express = require("express");
require('dotenv').config();
const mongoose =require ("mongoose");
const Task = require("./database/task");

const app = express();
const port = 5000;
app.use(express.json());

const connectionString = process.env.DB_CONNECTION_STRING;
console.log(connectionString);

const startserver = async () =>{
    try{ 
        await mongoose.connect(connectionString, {
            dbName : ""        
        });
        console.log("Connection to the database successful");
        
        app.listen(port,()=>{
            console.log("http://localhost:"+port);
        })  
    }catch(error){
        console.log(error.message);
    }
} 
startserver();


app.get('/api/tasks', async (req, res) => {
    try {
      const tasks = await Task.find({ deletedAt: null });
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});
  

app.get('/api/tasks/:id', async (req, res) => {
    try {
      const task = await Task.findOne({ _id: req.params.id, deletedAt: null });
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json(task);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

app.post('/api/tasks', async (req, res) => {
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
});

app.put('/api/tasks/:id', async (req, res) => {
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
});

app.delete('/api/tasks/:id', async (req, res) => {
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
  });