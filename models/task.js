const Sequelize = require('sequelize')
const db = require('../config/database')
const Recipient = require('./recipient')


const Task = db.define('task', {
    recipientId: {
        type: Sequelize.STRING
    },
    category: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    }, 
    payment: {
        type: Sequelize.STRING
    }, 
    startdate: {
        type: Sequelize.STRING
    },
    enddate: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.STRING
    },
    paid: {
        type: Sequelize.STRING
    },
})

Task.hasOne(Recipient)
Recipient.belongsTo(Task)


module.exports = Task