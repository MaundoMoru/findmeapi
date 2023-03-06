const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const socket = require('socket.io')
const io = socket(server)
require('dotenv').config()
const db = require('./config/database')
const port = process.env.PORT || 3000
const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoutes')
const logRoute = require('./routes/logRoutes')
const taskRoute = require('./routes/taskRoutes')
const bodyParser = require('body-parser')
const cors = require('cors')


app.use(cors())

// parse application/json
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

app.use(authRoute)
app.use(userRoute)
app.use(logRoute)
app.use(taskRoute)


db.authenticate()
  .then(()=>{
    console.log('Connected to postgres...')

   io.on("connection", (socket)=>{
    console.log('Connected successfully ' + socket.id);

    socket.on('user', (obj)=>{
      console.log(obj)
    }) 

    socket.on('disconnect', ()=>{
      console.log('Disconnected sucessfully ' + socket.id);
     })    
   })

    server.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
   })

  })
  .catch(()=>{
      console.log('Failed')
})

