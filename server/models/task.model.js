const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    deletedAt: {
        type: Date,
        default:null,
        nullabel:true,
    },
    createdBy: {
        type: String,
        required: true,
    },
    deadline: {
        type: Date,
    },
    comments:{
        type: String,
    },
});

const TaskModel = mongoose.model("Task", taskSchema);

module.exports = TaskModel;
