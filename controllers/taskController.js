const Task = require('../models/task')
const User = require('../models/user')
const Recipient = require('../models/recipient')
const Sequelize = require('sequelize')


const addTask = (req, res)=>{
    Task.sync({force: false}).then(function(){
        Task.create({
            userId:req.body.userId,
            recipientId: req.body.recipientId,
            category: req.body.category,
            description: req.body.description,
            payment: req.body.payment,
            startdate: req.body.startdate,
            enddate: req.body.enddate,
            status: req.body.status,
            paid: req.body.paid,
        })
        .then((success)=>{
            Recipient.sync({force: false}).then(function(){
                Recipient.create({
                    taskId:success.id,
                    userId:success.recipientId,
                })
            })
            res.send(success)
        })
        .catch((err)=>{
            res.send(err)
        })
    })
}

const fetchTasks = (req, res)=>{
    Task.findAll({
        include: [
             {
                model: User,
            },
             {
                model: Recipient,
                include:{
                    model: User
                }
             }
        ]
    })
    .then((success)=>{
        res.send(success)
    })
    .catch((err)=>{
        res.send(err)
    })
}

module.exports = {
    addTask,
    fetchTasks,
}