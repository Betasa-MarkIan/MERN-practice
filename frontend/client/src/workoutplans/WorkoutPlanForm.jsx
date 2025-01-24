import style from '../components/WorkoutForm.module.css'
import { useState } from 'react'

function WorkoutPlanForm({ workoutPlans, setWorkoutPlans, category }) {

  const [title, setTitle]  = useState('')
  const [load, setLoad]   = useState('')
  const [reps, setReps] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const workoutPlan = {title, load, reps, category}
    const response = await fetch('api/workoutplans/post', {
    
      method: 'POST',
      body: JSON.stringify(workoutPlan),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const addedWorkoutPlan = await response.json()

    if(!response.ok) {
      setError(addedWorkoutPlan.error)

      setTimeout(() => {
        setError(null)
      }, 2000)
    }
    if(response.ok) {
      setError(null)
      setTitle('')
      setLoad('')
      setReps('')
      console.log('new workout added', addedWorkoutPlan)
      setWorkoutPlans([addedWorkoutPlan,...workoutPlans])

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

export default WorkoutPlanForm