
import { useState } from 'react'
import style from './Exercise.module.css'
function AddExerciseForm({ exercise }) {

  const [title, setTitle] = useState(exercise.title || '')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')

  // const handleExerciseSubmit = async (e) => {
  //   e.preventdefault()

  //   const response = await 
  // }


  return (
    <div>
      <form className={style['add-exercise-form']}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <input
          type="number"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Load"
          required
        />
        <input
          type="number"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Reps"
          required
        />
        <button type="button">
          Cancel
        </button>
        <button type="submit">
          Save
        </button>
      </form>
    </div>

  )
}

export default AddExerciseForm