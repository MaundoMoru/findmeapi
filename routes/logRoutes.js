const express = require('express')
const logController = require('../controllers/logsController')

const router = express.Router()

router.post('/createLog', logController.createLog)

module.exports = router