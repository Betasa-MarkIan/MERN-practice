
//imports the express.js library
const express = require('express')
const uri = process.env.MONGO_URI;
const mongoose = require('mongoose')

require('dotenv').config()

// express app - instance of express app
const app = express()
const workoutRoutes = require('./routes/workouts')

//global middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)

// Connect to db - async 
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for request
    app.listen(process.env.PORT, () => { 
    console.log('connected to db...')
    console.log('listening on port 5000')
   })
  })
  .catch((error) => {
    console.log(error)
  })


