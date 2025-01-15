
import style from '../pages/Home.module.css'
function WorkoutDetails({ workout }) {

  const formattedDate = new Date(workout.createdAt).toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short'
  })
  return(
    <div className={style['workout-details']}>
      
      <h4>{workout.title}</h4>
      <p><strong>Load {"(kg)"}:</strong>{workout.load}</p>
      <p><strong>Reps {"(kg)"}:</strong>{workout.reps}</p>
      <p>{formattedDate}</p>

    </div>

  )
}

export default WorkoutDetails