
import style from './WorkoutDetails.module.css'
function WorkoutDetails({ workout }) {

  const formattedDate = new Date(workout.createdAt).toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short'
  })
  return(
    <div className={style['workouts-details']}>
      
      <h4 className={style['workout-title']}>{workout.title}</h4>
      <p><strong>Load {"(kg)"}:</strong>{workout.load}</p>
      <p><strong>Reps {"(kg)"}:</strong>{workout.reps}</p>
      <p>{formattedDate}</p>

    </div>

  )
}

export default WorkoutDetails