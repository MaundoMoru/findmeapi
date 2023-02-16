const Sequelize = require('sequelize')
const db = require('../config/database')

const Recipient = db.define('recipient', {
    userId: {
        type: Sequelize.INTEGER
    },
    taskId: {
        type: Sequelize.INTEGER
    },
})

module.exports = Recipient