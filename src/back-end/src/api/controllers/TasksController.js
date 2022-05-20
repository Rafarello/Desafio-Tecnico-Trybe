/* eslint-disable require-jsdoc */
const TasksService = require('../services/TasksServices');

class TasksController {
  static async newTask(req, res) {
    const { name, description, status } = req.body;
    const newTask = { name, description, status };
    const response = await TasksService.createNewTask(newTask);
    if ('error' in response) {
      return res
          .status(500).json({ error: response.error });
    }
    return res.status(response.status).json({ message: response.createdTask });
  }

  static async getAllTasks(_req, res) {
    const response = await TasksService.getAllTasks();
    if ('error' in response) {
      return res
          .status(500).json({ error: response.error });
    }
    return res.status(response.status).json({ message: response.allTasks });
  }

  static async updateTask(req, res) {
    const { id } = req.params;
    const { name, description, status } = req.body;
    const updatedTask = { name, description, status };
    const response = await TasksService.updateTaskById(id, updatedTask);
    if ('error' in response) {
      return res
          .status(500).json({ error: response.error });
    }
    return res.status(response.status).json({ message: response.updatedTask });
  }

  static async getTaskById(req, res) {
    const { id } = req.params;
    const response = await TasksService.getTaskById(id);
    if ('error' in response) {
      return res
          .status(500).json({ error: response.error });
    }
    return res.status(response.status).json({ message: response.taskById });
  }

  static async deleteTask(req, res) {
    const { id } = req.params;
    const response = await TasksService.deleteTaskById(id);
    if ('error' in response) {
      return res
          .status(500).json({ error: response.error });
    }
    return res.status(response.status).json({ message: response.deletedTask });
  }
}

module.exports = TasksController;
