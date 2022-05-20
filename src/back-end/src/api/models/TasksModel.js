const mongoose = require('mongoose');

const TasksSchema = new mongoose.Schema({
  name: String,
  description: String,
  status: String,
  createdAt: Date,
});

const TasksModel = mongoose.model('Tasks', TasksSchema);

module.exports = TasksModel;
