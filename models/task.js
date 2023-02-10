const Sequelize = require('sequelize')
const db = require('../config/database')

const Task = db.define('task', {
    appointeeId: {
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

module.exports = Task