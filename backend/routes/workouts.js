
const express = require('express')
const router = express.Router()
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  patchWorkout
} = require('../controllers/workoutController')

// GET all workouts
router.get('/', getWorkout)

// GET single workout
router.get('/:id', getWorkouts)

// POST new workout
router.post('/post', createWorkout)

// DELETE a workout
router.delete('/delete', deleteWorkout)

// UPDATE a workout
router.patch('/patch', patchWorkout)


module.exports = router