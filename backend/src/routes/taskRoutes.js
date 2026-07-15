const express = require("express");
const router = express.Router();
const { createTask, getAllTasks, getById, updateTask, deleteTask } = require('../controller/taskController');
const  authMiddleware = require('../middleware/error.middleware')
router.post('/',authMiddleware, createTask);
router.get('/',authMiddleware, getAllTasks);
router.get('/:id',authMiddleware, getById);
router.put('/:id',authMiddleware, updateTask);
router.delete('/:id',authMiddleware, deleteTask);

module.exports = router;