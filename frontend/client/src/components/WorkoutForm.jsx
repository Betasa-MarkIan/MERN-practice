import style from './WorkoutForm.module.css'
import { useState } from 'react'

function WorkoutForm({ workouts, setWorkouts }) {

  const [title, setTitle]  = useState('')
  const [load, setLoad]   = useState('')
  const [reps, setReps] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = {title, load, reps}
    const response = await fetch('api/workouts/post', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const addedWorkout = await response.json()

    if(!response.ok) {
      setError(addedWorkout.error)

      setTimeout(() => {
        setError(null)
      }, 2000)
    }
    if(response.ok) {
      setError(null)
      setTitle('')
      setLoad('')
      setReps('')
      console.log('new workout added', addedWorkout)
      setWorkouts([addedWorkout,...workouts])

      setMessage('New workout added')

      setTimeout(() => {
        setMessage('')
      }, 2000)
    }
  }

  return(
    <div className={style['form-container']}>
       <form className={style['workout-form']} onSubmit={handleSubmit}>
        <h3>Add a New Workout</h3>


        <label>Exercise Title:</label>
          <input 
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
        />

        <label>Load{'(kg):'}</label>
          <input 
            type="number"
            onChange={(e) => setLoad(e.target.value)}
            value={load}
        />

        <label>Reps:</label>
          <input 
            type="number"
            onChange={(e) => setReps(e.target.value)}
            value={reps}
        />

        <button>Add Workout</button>
        {error && <p className={style['error-prompt']}>{error}</p>}
        {message && <p className={style['message-prompt']}>{message}</p>}
      </form>
    </div>
   
  )
  
}

export default WorkoutForm