const mongoose = require("mongoose");
const TaskModel = require("../models/task.model");
require('dotenv').config();

const db = {};

db.mongoose = mongoose;
db.tasks = TaskModel;
db.url = process.env.DB_CONNECTION_STRING;

// Exporting
module.exports = db;