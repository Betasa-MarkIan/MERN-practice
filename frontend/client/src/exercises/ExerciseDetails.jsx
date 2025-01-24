
import style from '../exercises/Exercise.module.css'
import { IoIosAdd } from "react-icons/io";
import { useState } from 'react';

function ExerciseDetails ({ exercise }) {

  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState(null)
  const [message, setMessage] = useState('')

  const handleOnClick = async () => {
    const title = exercise.title
    const load = 0
    const reps = 0

    const workout = { title, load, reps }

    try {
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
      }
      if(response.ok) {
        setError(null)
        console.log('new workout added', addedWorkout)
        setWorkouts((prevWorkouts) => [addedWorkout, ...prevWorkouts]) 
        setMessage('Workout added to home')

        setTimeout(() => {
          setMessage('')
        }, 3000)
      }
    } catch(error) {
        setError('Something went wrong. Please try again.')
        console.error(error.message)
    }
   

  }

  return (
    <div>
<div className={style['exercise-details']}>
      <div className={style['exercise-text']}>

            <h4>{exercise.title}</h4>
            <p>
              <strong>Equipment: </strong> {exercise.equipment}
            </p>
            <p>
              <strong>Description: </strong> {exercise.description}
            </p>
        
      </div>
  
      <div className={style['exercise-function']}>
        <div
          className={style['exercise-add-button']}
          onClick={handleOnClick}
        >
          <button>Add</button>
          <IoIosAdd />
        </div>
      </div>
    </div>
      {error && <p className={style['error-prompt']}>{error}</p>}
      {message && <p className={style['message-prompt']}>{message}</p>}
    </div>
  )
}  
 export default ExerciseDetails