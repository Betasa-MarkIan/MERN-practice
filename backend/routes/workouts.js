
const express = require('express')
const router = express.Router()
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  patchWorkout
  //add get exercise later
} = require('../controllers/workoutController')

// GET all workouts
router.get('/', getWorkouts)

// GET single workout
router.get('/:id', getWorkout)

router.get('/exercise-list/:id', getExercise)

// POST new workout
router.post('/post', createWorkout)

// DELETE a workout
router.delete('/delete/:id', deleteWorkout)

// UPDATE a workout
router.patch('/update/:id', patchWorkout)


module.exports = router