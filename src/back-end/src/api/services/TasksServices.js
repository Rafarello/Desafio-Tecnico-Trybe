/* eslint-disable require-jsdoc */
const TasksModel = require('../models/TasksModel');

const CREATED = 201;
const OK = 200;
const DELETED = 202;

class TasksService {
  static async createNewTask(newTask) {
    const createdAt = new Date();
    try {
      const response = await TasksModel.create({ ...newTask, createdAt });
      return { status: CREATED, createdTask: response };
    } catch (error) {
      return { error };
    }
  }

  static async getAllTasks() {
    try {
      const response = await TasksModel.find();
      return { status: OK, allTasks: response };
    } catch (error) {
      return { error };
    }
  }

  static async updateTaskById(id, updatedTask) {
    try {
      const response = await TasksModel.updateOne({ _id: id }, updatedTask);
      return { status: OK, updatedTask: response };
    } catch (error) {
      return { error };
    }
  }

  static async getTaskById(id) {
    try {
      const response = await TasksModel.findById({ _id: id });
      console.log(response);
      return { status: OK, taskById: response };
    } catch (error) {
      return { error };
    }
  }

  static async deleteTaskById(id) {
    try {
      const response = await TasksModel.findByIdAndDelete({ _id: id });
      return { status: DELETED, deletedTask: response };
    } catch (error) {
      return { error };
    }
  }
}

module.exports = TasksService;
