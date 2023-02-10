const express = require('express')
const taskController = require('../controllers/taskController')

const router = express.Router()

router.post('/addTask', taskController.addTask)
router.get('/fetchTasks', taskController.fetchTasks)

module.exports = router



