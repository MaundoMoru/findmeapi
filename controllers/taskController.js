const Task = require('../models/task')
const User = require('../models/user')

const addTask = (req, res)=>{
    Task.sync({force: false}).then(function(){
        Task.create({
            userId:req.body.userId,
            appointeeId: req.body.appointeeId,
            category: req.body.category,
            description: req.body.description,
            payment: req.body.payment,
            startdate: req.body.startdate,
            enddate: req.body.enddate,
            status: req.body.status,
            paid: req.body.paid,
        })
        .then((success)=>{
            res.send(success)
        })
        .catch((err)=>{
            res.send(err)
        })
    })
}

const fetchTasks = (req, res)=>{
    Task.findAll({include:User})
    .then((success)=>{
        res.send(success)
        .catch((err)=>{
            res.send(err)
        })
    })
}

module.exports = {
    addTask,
    fetchTasks
}