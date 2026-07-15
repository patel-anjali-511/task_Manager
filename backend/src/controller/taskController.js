const Task = require('../models/Task');

async function createTask(req, res, next) {
  try {
    const { title, description, priority, status, dueDate } = req.body;
    
    if (!title) {
      res.status(400);
      throw new Error('Task title is required');
    }

    const task = await Task.create({
      title,
      description,
      priority,
      status,
      dueDate
    });

    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
}

async function getAllTasks(req, res, next) {
  try {
    const filter = {};
    if (req.query.status) {
      filter.status = req.query.status;
    }

    const tasks = await Task.find(filter).sort({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
}

async function getById(req, res, next) {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      res.status(404);
      throw new Error('Task not found');
    }
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
}

async function updateTask(req, res, next) {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      res.status(404);
      throw new Error('Task not found');
    }

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json(updatedTask);
  } catch (error) {
    next(error);
  }
}

async function deleteTask(req, res, next) {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      res.status(404);
      throw new Error('Task not found');
    }

    await task.deleteOne();
    res.status(200).json({ id: req.params.id });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createTask,
  getAllTasks,
  getById,
  updateTask,
  deleteTask
};