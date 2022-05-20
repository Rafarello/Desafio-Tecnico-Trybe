/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
const express = require('express');
const TasksController = require('../controllers/TasksController');
const { taskValidation } = require('../middlewares/TasksMiddlewares');

class Tasks {
  constructor() {
    this.router = express.Router();
    this.loadRoutes();
  }

  loadRoutes() {
    this.router.get('/tarefas', TasksController.getAllTasks);

    this.router.post('/tarefas', taskValidation, TasksController.newTask);

    this.router.get('/tarefas/:id', TasksController.getTaskById);

    this.router.patch(
        '/tarefas/:id',

        taskValidation,

        TasksController.updateTask,
    );

    this.router.delete('/tarefas/:id', TasksController.deleteTask);
  }
}

module.exports = new Tasks().router;
