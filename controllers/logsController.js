const Log = require('../models/log')

const createLog = (req, res)=>{
    Log.sync({force: false}).then( function(){
        Log.create({
            status: req.body.status,
            description: req.body.description
        })
        .then((success)=>{
            res.send(success)
        })
        .catch((err)=>{
            res.send(err)
        })
    })
    
}

module.exports = {
    createLog
}