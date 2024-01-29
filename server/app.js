const express = require("express");
require('dotenv').config();
const mongoose =require ("mongoose");
const Task = require("./database/task");

const app = express();
const port = 5000;

// const connectionString = process.env.DB_CONNECTION_STRING;
const connectionString  = "mongodb+srv://salmaelhani7:fAmsuG8J9bNtlzWs@cluster0.kthjlmt.mongodb.net/"
console.log(connectionString);

const startserver = async () =>{
    try{
        await mongoose.connect(connectionString, {
            dbName : ""        
        });
        console.log("connexion réussie avec la bdd");
        
        app.listen(port,()=>{
            console.log("http://localhost:"+port);
        })
    }catch(error){
        console.log(error.message);
    }
} 
startserver();

// Route to get all tasks
app.get('/api/tasks', async (req, res) => {
    try {
      const tasks = await Task.find({ deletedAt: null });
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Route to get a task by ID
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