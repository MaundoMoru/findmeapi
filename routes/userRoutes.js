const express = require('express')
const userRoute = require('../controllers/userController')
const multer = require('multer')
const upload = multer({dest: 'upload/'})

const router = express.Router()
router.post('/addUser',  upload.single('image'), userRoute.addUser)
router.get('/fetchUsers', userRoute.fetchUsers)
router.get('/deleteUser', userRoute.deleteUser)

module.exports = router