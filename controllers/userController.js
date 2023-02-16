const User = require('../models/user')

const addUser = (req, res)=>{  
User.sync({force: false}).then(function () {
    User.create({
        image: req.body.image,
        name:req.body.name,
        hired:req.body.hired,
        availability:req.body.availability,
        category:req.body.category,
        payment:req.body.payment,
        rating:req.body.rating,
        online:req.body.online
        }).then((success)=>{
        res.send(success)
        }).catch((err)=>{
        res.send(err)
        })
    });
}

const fetchUsers = (req, res)=>{
    User.findAll({
        order:[
            ['id', 'ASC']
        ]
    })
    .then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
}

module.exports = {
    addUser,
    fetchUsers
}