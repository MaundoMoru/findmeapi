const Sequelize = require('sequelize')
const db = require('../config/database')

const Log = db.define('log', {
    status:{
        type:Sequelize.STRING
    },
    description:{
        type:Sequelize.STRING
    }
})


module.exports = Log