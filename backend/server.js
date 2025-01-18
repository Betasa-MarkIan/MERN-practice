
//imports the express.js library
const express = require('express')
const uri = process.env.MONGO_URI;
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

// express app - instance of express app
const app = express()
const workoutRoutes = require('./routes/workouts')
const exerciseRoutes = require('./routes/exercises')
const mondayRoutes = require('./routes/monday')
const tuesdayRoutes = require('./routes/tuesday')
const wednesdayRoutes = require('./routes/wednesday')
const thursdayRoutes = require('./routes/thursday')
const fridayRoutes = require('./routes/friday')
const saturdayRoutes = require('./routes/sunday')
const sundayRoutes = require('./routes/sunday')

//global middleware
app.use(express.json())
app.use(cors({origin: 'http://localhost:5173'}))
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/exercises', exerciseRoutes)
app.use('api/monday', mondayRoutes)
app.use('api/tuesday', tuesdayRoutes)
app.use('api/wednesday', wednesdayRoutes)
app.use('api/thursday', thursdayRoutes)
app.use('api/friday', fridayRoutes)
app.use('api/saturday', saturdayRoutes)
app.use('api/sunday', sundayRoutes)

// Connect to db - async 
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for request
    app.listen(process.env.PORT, () => { 
    console.log('connected to db...')
    console.log('listening on port 4000')
   })
  })
  .catch((error) => {
    console.log(error)
  })


