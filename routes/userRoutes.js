const express = require('express')
const userRoute = require('../controllers/userController')

const router = express.Router()
router.post('/addUser', userRoute.addUser)
router.get('/fetchUsers', userRoute.fetchUsers)
router.get('/deleteUser', userRoute.deleteUser)

module.exports = router