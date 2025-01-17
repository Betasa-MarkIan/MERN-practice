const Exercise = require('../models/exerciseModels')
const mongoose = require('mongoose')

// GET exercises by category

const getExerciseByCategory = async (req, res) => {
  const { category } = req.params

  try {
    const exercises = await Exercise.find({ category }) 
      return res.status(200).json(exercises)
      }
  catch (error) {
      return res.status(500).json({ error: error.message });
    }
}

// ADD exercises by category
const addExerciseByCategory = async (req, res) => {
const { title, equipment, description, category } = req.body

try {
  const exercise = await Exercise.create({title, equipment, description, category})
  res.status(200).json(exercise)
}
catch (error) {
  return res.status(400).json({ error: error.message })
}}


// DELETE exercises by category
const deleteExerciseByCategory = async (req, res) => {
  const { id } = req.params

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such exercise found with this id'})
    }

    const exercise =  await Exercise.findOneAndDelete({_id: id})

    if(!exercise) {
      return res.status(404).json({error: 'No such exercise found'})
    } else {
      return res.status(200).json({message: 'Exercise deleted successfully', exercise})
    }

  } catch (error){
    return res.status(404).json({error: error.message})
  }}

module.exports = {
  getExerciseByCategory,
  addExerciseByCategory,
  deleteExerciseByCategory
}
