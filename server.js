const express = require('express')
const app = express()
const http = require('http')
server = http.createServer(app)
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
    server.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
    
   })
  })
  .catch(()=>{
      console.log('Failed')
})

