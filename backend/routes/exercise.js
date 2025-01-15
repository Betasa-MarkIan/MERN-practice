
const express = require('express')
const router = express.Router()
const { getExerciseByCategory, addExerciseByCategory, deleteExerciseByCategory } = require('../controllers/exerciseController')

//get exercises by category
router.get('/:category', getExerciseByCategory)

//post exercise by category
router.post('/post', addExerciseByCategory)

//delete exercise by category
router.delete('/delete/:id', deleteExerciseByCategory)

module.exports = router