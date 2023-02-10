const  Sequelize  = require('sequelize')
const db = require('../config/database')
const Log = require('../models/log')
const Task = require('../models/task')

const User = db.define('user', {
    image:{
        type: Sequelize.STRING
    },
    name:{
        type: Sequelize.STRING
    },
    hired:{
        type: Sequelize.STRING
    },
    availability:{
        type: Sequelize.STRING
    },
    category:{
        type: Sequelize.STRING
    },
    payment:{
        type: Sequelize.STRING
    },
    rating:{
        type: Sequelize.STRING
    },
    online:{
        type: Sequelize.STRING
    },
})

// user and tasks relationship
User.hasMany(Task)
Task.belongsTo(User)

// user and tasks relationship
User.hasMany(Task)
Task.belongsTo(User)


module.exports = User