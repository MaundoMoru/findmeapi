const  Sequelize  = require('sequelize')
const db = require('../config/database')
const Log = require('../models/log')
const Task = require('../models/task')
const Recipient = require('../models/recipient')

const User = db.define('user', {
    phoneNumber:{
        type: Sequelize.STRING
    },
    image:{
        type: Sequelize.STRING,
    },
    name:{
        type: Sequelize.STRING
    },
    bio:{
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

User.hasOne(Recipient)
Recipient.belongsTo(User)




module.exports = User